import Image from 'next/image'
import { defineField, defineType } from 'sanity'

export const studentType = defineType({
    name: "student",
    title: "Student",
    type: "document",
    fields: [
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "clerkId",
            title: "Clerk User Id",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "imageUrl",
            title: "profile image url",
            type: "string",
        }),
    ],
    preview: {
        select: {
            firstName: "firstName",
            lastName: "lastName",
            imageUrl: "imageUrl",
        },
        prepare({ firstName, lastName, imageUrl }) {
            return {
                title: `${firstName.chatAt(0).toUpperCase()}${firstName.slice(1)} ${lastName.chatAt(0).toUpperCase()}${lastName.slice(1)}`,
                media: (
                    <Image 
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                        width={100}
                        height={100}
                    />
                )
            }
        },
    },
})