import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
	name: "homePage",
	title: "Home Page",
	type: "document",
	fields: [
		defineField({
			name: "locale",
			title: "Locale",
			type: "string",
			validation: (rule) => rule.required(),
			options: {
				list: [
					{ title: "English", value: "en" },
					{ title: "French", value: "fr" },
					{ title: "Arabic", value: "ar" },
				],
			},
		}),
		defineField({
			name: "seoTitle",
			title: "SEO Title",
			type: "string",
			validation: (rule) => rule.required().max(70),
		}),
		defineField({
			name: "seoDescription",
			title: "SEO Description",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required().max(170),
		}),
		defineField({
			name: "announcement",
			title: "Announcement",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "nav",
			title: "Navigation Links",
			type: "array",
			validation: (rule) => rule.required().min(2),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
						defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
					],
				}),
			],
		}),
		defineField({
			name: "hero",
			title: "Hero",
			type: "object",
			fields: [
				defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
				defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
				defineField({
					name: "summary",
					title: "Summary",
					type: "text",
					rows: 4,
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "primaryCta",
					title: "Primary CTA",
					type: "object",
					fields: [
						defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
						defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
					],
				}),
				defineField({
					name: "secondaryCta",
					title: "Secondary CTA",
					type: "object",
					fields: [
						defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
						defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
					],
				}),
				defineField({
					name: "stats",
					title: "Stats",
					type: "array",
					validation: (rule) => rule.required().min(2),
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
								defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
							],
						}),
					],
				}),
			],
		}),
		defineField({
			name: "notebookCards",
			title: "Notebook Cards",
			type: "array",
			validation: (rule) => rule.required().min(4).max(4),
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({ name: "kicker", title: "Kicker", type: "string", validation: (rule) => rule.required() }),
						defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
						defineField({
							name: "description",
							title: "Description",
							type: "text",
							rows: 3,
							validation: (rule) => rule.required(),
						}),
					],
				}),
			],
		}),
		defineField({
			name: "collections",
			title: "Collections Section",
			type: "object",
			fields: [
				defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
				defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
				defineField({
					name: "description",
					title: "Description",
					type: "text",
					rows: 4,
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "cards",
					title: "Collection Cards",
					type: "array",
					validation: (rule) => rule.required().min(4),
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
								defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
								defineField({
									name: "description",
									title: "Description",
									type: "text",
									rows: 3,
									validation: (rule) => rule.required(),
								}),
							],
						}),
					],
				}),
			],
		}),
		defineField({
			name: "journal",
			title: "Journal Section",
			type: "object",
			fields: [
				defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
				defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
				defineField({
					name: "description",
					title: "Description",
					type: "text",
					rows: 4,
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "stories",
					title: "Stories",
					type: "array",
					validation: (rule) => rule.required().min(2),
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({ name: "access", title: "Access Label", type: "string", validation: (rule) => rule.required() }),
								defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
								defineField({
									name: "description",
									title: "Description",
									type: "text",
									rows: 3,
									validation: (rule) => rule.required(),
								}),
							],
						}),
					],
				}),
			],
		}),
		defineField({
			name: "community",
			title: "Community Section",
			type: "object",
			fields: [
				defineField({ name: "eyebrow", title: "Eyebrow", type: "string", validation: (rule) => rule.required() }),
				defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
				defineField({
					name: "description",
					title: "Description",
					type: "text",
					rows: 4,
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "approvalNote",
					title: "Approval Note",
					type: "string",
					validation: (rule) => rule.required(),
				}),
				defineField({
					name: "steps",
					title: "Approval Steps",
					type: "array",
					validation: (rule) => rule.required().min(3),
					of: [
						defineArrayMember({
							type: "object",
							fields: [
								defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
								defineField({
									name: "description",
									title: "Description",
									type: "text",
									rows: 3,
									validation: (rule) => rule.required(),
								}),
							],
						}),
					],
				}),
				defineField({
					name: "cta",
					title: "CTA",
					type: "object",
					fields: [
						defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
						defineField({ name: "href", title: "Href", type: "string", validation: (rule) => rule.required() }),
					],
				}),
			],
		}),
		defineField({
			name: "footerNote",
			title: "Footer Note",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: "seoTitle",
			subtitle: "locale",
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: `Locale: ${selection.subtitle}`,
			};
		},
	},
});
