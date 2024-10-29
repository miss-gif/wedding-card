const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((line, index, array) => {
    return (
      <p key={index}>
        {line}
        {index === array.length - 1 ? null : <br />}
      </p>
    )
  })

  return <div>{message}</div>
}

export default Text
