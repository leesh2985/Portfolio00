interface PostProps {
  posts: { id: number; title: string; userId: number }[]; // userId 추가
  loading: boolean;
}

export default function Posts({ posts, loading }: PostProps) {
  return (
    <>
      {loading && <div>loading...</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title}
            <br />
            <strong>User ID:</strong> {post.userId} {/* userId 표시 */}
            <br />
            <strong>ID:</strong> {post.id} {/* id 표시 */}
          </li>
        ))}
      </ul>
    </>
  );
}
