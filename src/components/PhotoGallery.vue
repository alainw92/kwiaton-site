<template>
	<div>
		<v-row class="gallery">
			<v-col v-for="photo in photos" :key="photo.src" cols="12" sm="6" lg="4" class="d-flex">
				<v-hover close-delay="300" v-slot="{ hover }">
					<v-img
						:cover="!contain"
						:contain="contain"
						:lazy-src="`${folder}${photoSuperMinSrc(photo.src)}`"
						:src="`${folder}${photoMinSrc(photo.src)}`"
						:alt="photo.alt ? photo.alt : ''"
						aspect-ratio="1"
						class="image grey lighten-2"
						:class="{ 'elevation-5': hover }"
						@click="showDialog(photo)"
					>
						<template #placeholder>
							<v-row class="fill-height ma-0" align="center" justify="center">
								<v-progress-circular indeterminate color="text" size="50" width="5"></v-progress-circular>
							</v-row>
						</template>
						<template #default>
							<v-expand-transition v-if="photo.title || photo.description">
								<div
									class="d-flex transition-fast-in-fast-out text v-card--reveal white--text"
									:style="{ height: hover && photo.description ? '50%' : '25%' }"
								>
									<div class="text-center px-2">
										<h3 class="text-subtitle-1">{{ photo.title }}</h3>
										<v-fade-transition leave-absolute>
											<p v-if="hover && photo.description" class="caption">{{ photo.description }}</p>
										</v-fade-transition>
									</div>
								</div>
							</v-expand-transition>
						</template>
					</v-img>
				</v-hover>
			</v-col>
		</v-row>

		<!-- DIALOG -->
		<v-dialog v-if="isPhotoDialog" v-model="isPhotoDialog" max-width="1100px">
			<card color="bg" class="photo-dialog d-flex flex-column pa-4 relative">
				<v-row no-gutters style="max-height: 40px">
					<v-col>
						<v-btn icon tile class="float-right" style="z-index: 2" @click="closeDialog">
							<v-icon>$close</v-icon>
						</v-btn>
					</v-col>
				</v-row>
				<transition name="fade-transition" mode="out-in">
					<v-row
						:key="photoChangeKey"
						v-touch="{
							left: () => nextPhoto(),
							right: () => prevPhoto(),
						}"
						class="flex-grow-1 mt-0"
						style="max-height: calc(100% - 40px)"
					>
						<v-col
							cols="12"
							:sm="photoActive.isCred ? 7 : 12"
							:md="photoActive.isCred ? 9 : 12"
							class="d-flex align-center justify-center flex-grow-1"
							style="max-height: 100%"
						>
							<v-img
								contain
								:lazy-src="`${folder}${photoMinSrc(photoActive.src)}`"
								:src="`${folder}${photoActive.src}`"
								class="dialog-image"
							>
								<template #placeholder>
									<v-row class="fill-height ma-0" align="center" justify="center">
										<v-progress-circular indeterminate color="text" size="100" width="10"></v-progress-circular>
									</v-row>
								</template>
							</v-img>
						</v-col>
						<v-col v-if="photoActive.isCred" cols="12" sm="5" md="3">
							<div>
								<h3 class="text-h6">{{ photoActive.title }}</h3>
								<p class="text-body-2 mt-4">{{ photoActive.description }}</p>
							</div>
						</v-col>
					</v-row>
				</transition>
				<v-row v-if="!isMobile" class="ma-n4 full-height full-width absolute">
					<v-col cols="6" sm="4" md="2" class="d-flex align-center justify-start">
						<v-btn color="text" class="ma-2 btn-chevron" @click.stop="prevPhoto()">
							<v-icon color="bgLight">$left</v-icon>
						</v-btn>
					</v-col>
					<v-spacer></v-spacer>
					<v-col cols="6" sm="4" md="2" class="d-flex align-center justify-end">
						<v-btn color="text" class="ma-2 btn-chevron" @click.stop="nextPhoto()">
							<v-icon color="bgLight">$right</v-icon>
						</v-btn>
					</v-col>
				</v-row>
			</card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	name: "PhotoGallery",

	data() {
		return {
			photoActive: {
				src: "",
				alt: "",
				title: "",
				description: "",
				//
				isCred: false,
			},
			isPhotoDialog: false,
			photoChangeKey: 0,
			isPrev: false,
		};
	},

	props: {
		folder: {
			type: String,
			default: "",
		},

		photos: {
			type: Array,
			default: function () {
				return [];
			},
		},

		contain: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		isMobile() {
			return this.$store.state.isMobile;
		},
	},

	methods: {
		showDialog(photo) {
			this.photoActive.src = photo.src;
			this.photoActive.alt = photo.alt;
			this.photoActive.title = photo.title;
			this.photoActive.description = photo.description;
			this.photoActive.isCred = photo.title || photo.description;
			//
			this.isPhotoDialog = true;
		},
		closeDialog() {
			this.isPhotoDialog = false;
			//
			this.photoActive = {
				src: "",
				alt: "",
				title: "",
				description: "",
				//
				isCred: false,
			};
		},

		prevPhoto() {
			const currentPhotoIndex = this.photos.findIndex((photo) => photo.src === this.photoActive.src);
			const countPhotos = this.photos.length;
			let newIndex;
			if (currentPhotoIndex <= 0) {
				newIndex = countPhotos - 1;
			} else {
				newIndex = currentPhotoIndex - 1;
			}

			this.isPrev = true;
			this.photoChangeKey++;

			this.photoActive.src = this.photos[newIndex].src;
			this.photoActive.alt = this.photos[newIndex].alt;
			this.photoActive.title = this.photos[newIndex].title;
			this.photoActive.description = this.photos[newIndex].description;
			this.photoActive.isCred = this.photos[newIndex].title || this.photos[newIndex].description;
		},
		nextPhoto() {
			const currentPhotoIndex = this.photos.findIndex((photo) => photo.src === this.photoActive.src);
			const countPhotos = this.photos.length;
			let newIndex;
			if (currentPhotoIndex >= countPhotos - 1) {
				newIndex = 0;
			} else {
				newIndex = currentPhotoIndex + 1;
			}

			this.isPrev = false;
			this.photoChangeKey++;

			this.photoActive.src = this.photos[newIndex].src;
			this.photoActive.alt = this.photos[newIndex].alt;
			this.photoActive.title = this.photos[newIndex].title;
			this.photoActive.description = this.photos[newIndex].description;
			this.photoActive.isCred = this.photos[newIndex].title || this.photos[newIndex].description;
		},

		//

		photoSuperMinSrc(src) {
			const nameArr = src.split('.');
			return `${nameArr[0]}-xs.${nameArr[1]}`;
		},
		photoMinSrc(src) {
			const nameArr = src.split('.');
			return `${nameArr[0]}-min.${nameArr[1]}`;
		},

	},
};
</script>

<style lang="scss" scoped>
.photo-dialog {
	height: 80vh;
	overflow-y: auto;
}
.dialog-image {
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
}

.image {
	cursor: pointer;
	transition: transform 0.2s, box-shadow 0.6s;

	&:hover {
		transform: scale(1.03);
	}
}

.v-card--reveal {
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: 0.6;
	position: absolute;
	width: 100%;
}

.absolute {
	position: absolute;
}

.btn-chevron {
	padding: 8px !important;
	min-width: 36px !important;
}
</style>
