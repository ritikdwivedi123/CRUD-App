
function AddPost({onAdd}) {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value,e.target.userId.value,e.target.body.value);
    e.target.title.value = "";
    e.target.userId.value = "";
    e.target.body.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit} style={{textAlign: "center"}}>
        <h3>Add User</h3>
        <input placeholder="title" name="title" />
        <input placeholder="userId" name="userId" />
        <input placeholder="body" name="body" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );

}

export default AddPost;
