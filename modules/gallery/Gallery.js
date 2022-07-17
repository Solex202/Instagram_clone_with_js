const Gallery= () =>`
<input type="file" name="photo" id="addPhotoInput">
<label for="addPhotoInput">
    <i class="add-photo fa-light fa-plus"></i>
</label>

        <div class="gallery-nav"></div>
        <section class="gallery">
            <a href="#" class="item">
                <img src="/assets/img1.jpg" width="90%" height="50%" alt=""/>
            </a>
            <a href="#" class="item">
                <img src="/assets/img2.jpg" width="90%" alt=""/>
            </a>   
            <a href="#" class="item">
                <img src="/assets/img3.jpg" width="90%" alt=""/>
            </a>    
            <a href="#" class="item">
                <img src="/assets/img4.jpg" width="90%" alt=""/>
            </a>    
            <a href="#" class="item">
                <img src="/assets/img1.jpg" width="90%" alt=""/>
            </a>    
            <a href="#" class="item">    
                <img src="assets/img6.jpg" width="90%" alt=""/>
            </a>
        </section>
`

export default Gallery;