+++
# Gallery section using the Blank widget and Gallery element (shortcode).
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 68  # Order that this section will appear.

title = "Fine Art Gallery"
subtitle = ""
[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "2"
+++


<!-- Trigger the Modal -->
<img id="myImg" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20f10920-89ff-4cb5-a6ea-408aad335361/ddwcxw0-5cacc978-ed8d-4870-b0a0-410c8c94bcad.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjBmMTA5MjAtODlmZi00Y2I1LWE2ZWEtNDA4YWFkMzM1MzYxXC9kZHdjeHcwLTVjYWNjOTc4LWVkOGQtNDg3MC1iMGEwLTQxMGM4Yzk0YmNhZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.MLZGgcuiCaJ96TR155hbAW4_toCDqbGskQhSbYU3w2s" alt="Catman. Acrylic on canvas, 16 in x 20 in." style="width:100%;max-width:300px">

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="modal-content" id="img01">

  <!-- Modal Caption (Image Text) -->
  <div id="Catman. Acrylic on canvas, 16 in x 20 in."></div>
</div>



<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20f10920-89ff-4cb5-a6ea-408aad335361/ddwcxw0-5cacc978-ed8d-4870-b0a0-410c8c94bcad.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjBmMTA5MjAtODlmZi00Y2I1LWE2ZWEtNDA4YWFkMzM1MzYxXC9kZHdjeHcwLTVjYWNjOTc4LWVkOGQtNDg3MC1iMGEwLTQxMGM4Yzk0YmNhZC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.MLZGgcuiCaJ96TR155hbAW4_toCDqbGskQhSbYU3w2s' alt='Catman. Acrylic on canvas, 16 in x 20 in.' style="width:300px">

Catman. Acrylic on canvas, 16 in x 20 in.

<br>

<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20f10920-89ff-4cb5-a6ea-408aad335361/ddwcysk-ca0fc84f-61fe-483e-aeef-9feda2360953.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjBmMTA5MjAtODlmZi00Y2I1LWE2ZWEtNDA4YWFkMzM1MzYxXC9kZHdjeXNrLWNhMGZjODRmLTYxZmUtNDgzZS1hZWVmLTlmZWRhMjM2MDk1My5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.f2JP8pbo8HoE83PYQhFgGkdvWOAxnptPjGwEkgPLchM' alt='Billy. Digital painting on an iPad with Apple Pencil.' style="width:300px">
  
Billy. Digital painting on an iPad with Apple Pencil.



<h2> See more on my <a href="https://www.deviantart.com/jennatbee" target="_blank">DeviantArt</a> page.</h2>





/* Style the Image Used to Trigger the Modal */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (Image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image (Image Text) - Same Width as the Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation - Zoom in the Modal */
.modal-content, #caption { 
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}






// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
