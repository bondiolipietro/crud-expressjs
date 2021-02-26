$('.delete_button').click(function (e) {
  e.preventDefault();
  let id = $(this).attr('data-id');
  if (confirm('Do you really want to delete this record?')) {
    axios.delete(`/api/workout/${id}`).then((res) => {
      alert('Data Deleted Successfully!');
      location.reload();
    });
  }
});
