// import Image from 'next/image'
import { defineField, defineType} from 'sanity'
import { urlFor } from '../lib/image';

export const enrollmentType = defineType({
    name: "enrollment",
    title: "Enrollment",
    type: "document",
    fields: [
        defineField({
            name: "student",
            title: "Student",
            type: "reference",
            to: [{ type: "student" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "course",
            title: "Course",
            type: "reference",
            to: [{ type: "course" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "amount",
            title: "Amount",
            type: "number",
            validation: (rule) => rule.required().min(0),
            description: "The amount paid for the course enrollment in cents"
        }),
        defineField({
            name: "paymentId",
            title: "Payment ID",
            type: "string",
            validation: (rule) => rule.required(),
            description: "The Stripe payment/checkout session ID"
        }),
        defineField({
            name: "enrollment",
            title: "Enrolled At",
            type: "datetime",
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            courseTitle: "course.title",
            studentFirstName: "student.firstName",
            studentLastName: "student.lastName",
            studentImage: "student.imageUrl"
        },
        prepare({ courseTitle, studentFirstName, studentLastName, studentImage }) {
            return {
                title: `${studentFirstName} ${studentLastName}`,
                subtitle: courseTitle,
                media: studentImage ? urlFor(studentImage).url() : undefined,
            };
        }
    } 
})