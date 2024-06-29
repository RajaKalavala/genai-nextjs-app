import Story from '@/components/Story'
import { getAllStories, getStory } from '@/lib/getAllStories'
import { notFound } from 'next/navigation'

interface StoryPageProps {
  params: {
    id: string
  }
}

function StoryPage({ params: { id } }: StoryPageProps) {
  // Explanation: The id is URL encoded, so we need to decode it before using it to get the story.
  // This fixes the issue where the story is not found when the id contains special charactrs such as @20 for spaces.
  const decodedId = decodeURIComponent(id)
  const story = getStory(decodedId)

  if (!story) {
    return notFound()
  }

  return <Story story={story} />

  return <div>Story: {decodedId}</div>
}

export default StoryPage

export async function generateStaticParams() {
  const stories = getAllStories()

  // Explaination: We need to return an array of objects with the id property set to the story id. This will generate a static page for each story.
  // Example: [{ id: 'story-id-1' }, { id: 'story-id-2' }, ...]
  const paths = stories.map((story) => ({
    id: story.story,
  }))

  return paths
}
