export default function User({user}) {
  return (
    <>
        <p><b>{user.name}</b></p>
        <p>{user.email}</p>
        <hr />
    </>
  )
}
