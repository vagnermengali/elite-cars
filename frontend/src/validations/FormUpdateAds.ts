import * as yup from "yup";

export const schemaUpdateAd = yup.object().shape({
	title: yup.string().trim(),
	description: yup.string().trim(),
	year: yup
		.number(),
	mileage: yup
		.number(),
	price: yup.string().trim(),
	isActive: yup.boolean(),
	urlCoverImage: yup.string().trim(),
	urlImage1: yup.string().trim(),
	urlImage2: yup.string().trim(),
	urlImage3: yup.string().trim(),
	urlImage4: yup.string().trim(),
	urlImage5: yup.string().trim(),
	urlImage6: yup.string().trim(),
});