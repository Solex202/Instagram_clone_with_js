const Bio = () =>{
const name = localStorage.getItem('name')
    
    return `
<section class="bio">
            <div class="profile-photo">
                <img src="/assets/lota.jpg" alt="profile-photo" width="130px"/>
            </div>
            <div class="profile-info">
                <p class="name">${name}</p>
                <p class="about">Hi, I am Senior dev but I have anger issue</p>
                <button class="">Edit bio</button>
            </div>
            <form class="edit-bio-form">
                <input type="text" id="name" placeholder="Name"/>
                <button type="submit">Submit</button>
            </form>
        </section>`
    }

        export default Bio