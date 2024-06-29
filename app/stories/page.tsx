import { getAllStories } from '@/lib/getAllStories'
import { Story } from '@/types/stories'

function Stories() {
  const stories: Story[] = getAllStories()

  console.log(stories)
  return <div>Stories</div>
}

export default Stories
