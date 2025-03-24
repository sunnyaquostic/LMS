import { type SchemaTypeDefinition } from 'sanity'
import { studentType } from './StudentType'
import { courseType } from './courseType'
import { moduleType } from './moduleType'
import { lessonType } from './lessonType'
import { instructorType } from './instructorType'
import { blockContent } from './blockContent'
import { enrollmentType } from './enrollmentType'
import { categoryType } from './categoryType'
import { lessonCompletionType } from './lessonCompletionType'

// import {blockContentType} from './blockContentType'
// import {categoryType} from './categoryType'
// import {postType} from './postType'
// import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    studentType,
    courseType,
    moduleType,
    lessonType,
    instructorType,
    blockContent,
    enrollmentType,
    categoryType,
    lessonCompletionType,
  ],
  // types: [blockContentType, categoryType, postType, authorType],
}
