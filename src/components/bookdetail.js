import React, { useState, useEffect } from "react";
import axios from "axios";
export default function BookDetails() {
    const [form, setForms] = useState({
        name:name,
        value:value
    });
  
    useEffect(() => {
      // Make a request to your backend API to retrieve the list of books
      // Set the state with the response data
    }, []);
  
    const handleChange = event => {

 const {name, value } = event.target;
setFormData(prevData => ({
...prevData,
[name]: value
}));
};

const handleSubmit = event => {
event.preventDefault();
axios
.put(/api/books/${props.match.params.id}, formData)
.then(response => {
// handle success
setBook(response.data);
setFormData({});
alert("Book edited successfully");
})
.catch(error => {
console.error(error);
// handle error
});
};

return (
<form onSubmit={handleSubmit}>
<label htmlFor="title">Title:</label>
<input
     type="text"
     name="title"
     id="title"
     value={formData.title}
     onChange={handleChange}
   />
<label htmlFor="author">Author:</label>
<input
     type="text"
     name="author"
     id="author"
     value={formData.author}
     onChange={handleChange}
   />
<label htmlFor="publisher">Publisher:</label>
<input
     type="text"
     name="publisher"
     id="publisher"
     value={formData.publisher}
     onChange={handleChange}
   />
<button type="submit">Save</button>
</form>
);
}







