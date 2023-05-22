import { allDocs } from 'contentlayer/generated'

const sortedDocs = allDocs.sort((obj1, obj2) => {
    return new Date(obj2.date) - new Date(obj1.date)
})

export default sortedDocs