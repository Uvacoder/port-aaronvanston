import withPost, { Content } from 'nextein/post'

import PageTitle from '../components/PageTitle/PageTitle'
import Container from '../components/Container/Container'

const Post = ({ post }) => (
  <Container>
    <PageTitle>{post.data.title} —</PageTitle>
    <Content {...post} />
  </Container>
)

export default withPost(Post)