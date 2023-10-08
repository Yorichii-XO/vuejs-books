const AddBook = {
    emits: ["submitedBook"],
    template: `
      <div class="row">
        <div class="col-md-6 mx-auto my-4">
        <center>
          <h3 class="border-bottom py-2">Ajouter un livre</h3>
         </center>
          <br>
          <form @submit="submit">
            <div class="form-group">
              <input
                type="text"
                placeholder="Réf"
                class="form-control"
                :class="book.ref.length ? validClass : errorClass"
                v-model="book.ref"
              >
            </div>
            
            <br />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                :class="book.title.length ? validClass : errorClass"
                v-model="book.title"
                placeholder="Titre"
              >
            </div>
            <br />
            <div class="form-group">
              <textarea
                type="text"
                cols="30"
                rows="5"
                placeholder="Description" 
                :class="book.description.length ? validClass : errorClass"
                v-model="book.description"
                class="form-control"
                v-model="book.description"
              ></textarea>
            </div>
            
            <br />
          
            <div class="form-group" >
            <input
            id="image"
            type="url"
            placeholder="Image URL"
            class="form-control"
            :class="book.image.length ? validClass : errorClass"
            v-model="book.image"
          >
            </div>
          
            <br />
            <div class="form-group">
              <button type="submit" class="btn btn-success">Valider</button>
            </div>
          </form>
        </div>
      </div>`,
    data() {
      return {
        book: {
          ref: "",
          title: "",
          description: "",
          image: "",
        },
        errorClass: "is-invalid",
        validClass: "is-valid",
      };
    },
    methods: {
      submit($e) {
        $e.preventDefault();
        this.$emit("submitedBook", this.book);
      },
    },
  };
const App={
    template:`
                
    <div class="container">
    <div class="row">

    <AddBook @submitedBook="AjouterBook"/>
        <div class="col-md-8 mx-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>Réf</th>
                        <th>Titre</th>
                        <th class="description-column">Description</th>
                        <th class="image">Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(book,index) in books" :key="index">
                        <td>{{ book.ref }}</td>
                        <td>{{ book.title }}</td>
                        <td>{{ book.description }}</td>
                        <td><img :src="book.image" alt="Book Image" class="img-fluid"/></td>
                        <td>
                        <span @click="removeBook(index)"
                        class="btn btn-danger font-weight-bold"
                        >
                        X</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    `,
    data(){
        return {
           
           books:[
            {ref:"A126",title:"Shatter Me",
            description:"Shatter Me is a young adult dystopian romantic thriller written by Tahereh Mafi, published on November 15, 201",image:"https://th.bing.com/th/id/OIP.lWA9nyNiVAAWmMmhI2zMrAAAAA?w=178&h=271&c=7&r=0&o=5&pid=1.7"},
            {ref:"A127",title:"The crule prince",
            description:"The Cruel Prince was a finalist for the Lodestar Award, took second place in the Locus Awards, and won the Inky Award in 2019",image:"https://imgs.search.brave.com/0OaSMlMFoakB37i6mtgxMOc0ew2NwvoEkK0eLW4_h0Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hlcmVhZHNyb21h/bmNlYm9va3MuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzAyL3RoZS1sb3N0/LXNpc3RlcnMuanBn"}, 
            {ref:"A128",title:"Norse Mythology",
            description:"Norse Mythology is a 2017 book by Neil Gaiman. The book is a retelling of several stories from Norse mythology.",
            image:"https://imgs.search.brave.com/iB43LyUaj6ngwvnPsPMv5dY1YMCm9zLzQkBhFYKDZbw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/dGhyaWZ0Ym9va3Mu/Y29tL2FwaS9pbWFn/ZXMvbC9kZTJmZTQ5/NmJiZGMwNmJiYjNi/NTQ2MmNiODFiMjgw/Nzg4NWI0YWFhLmpw/Zw"} 
        ,{ref:"A129",title:"Belive Me",description:"Unravel Me by Tahereh Mafi book review. Click to read the full review of Unravel Me in New York Journal of Books. Review written by June Goodwin",
        image:"https://imgs.search.brave.com/NH3iZkSRltLZIlUJAL387yU6XMuBZmMmARvskyVgEig/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzkxZU04bURuMDJM/LmpwZw"}
        ,{ref:"A130",title:"the love hypothesis",description:"The Love Hypothesis by Ali Hazelwood ,Sexy, sassy and wonderfully feel-good, Hazelwood's science-based rom-com finds a PhD student embarking on a fake relationship with a hot young professor. When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.",
        image:"https://th.bing.com/th/id/OIP.KaamF08PgGIJ_vM5NFSHDAAAAA?w=178&h=268&c=7&r=0&o=5&pid=1.7"}
      
      ]
    };
},
    components:
    {
       AddBook 
    },
    methods:{
        AjouterBook(book){
          this.books.push(book)
        },
        removeBook(index){
            this.books.splice(index,1)
        }
    }
};

Vue.createApp(App).mount("#app")