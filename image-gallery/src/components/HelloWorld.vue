<template>
  <div class="container">
    <button @click="start">Start Counter</button>
    <p>{{counter}}</p>

    <form @submit.prevent="login">
      <input value placeholder="username" />
      <input type="password" value placeholder="password" />
      <button type="submit">Submit</button>
    </form>
    <p>The gallery has {{ count }} images!</p>
    <form @submit.prevent="addImage('Message', $event)">
      <label for="img-source">Source:</label>
      <input
        :value="imgSrc"
        @input="setImgSource"
        type="text"
        id="img-source"
        placeholder="Your image source..."
      />

      <label for="img-alt">Alt:</label>
      <input
        :value="imgAlt"
        @input="setImgAlt"
        type="text"
        id="img-alt"
        placeholder="Your image alt..."
      />

      <label for="img-desc">Description:</label>
      <textarea
        :value="imgDescription"
        @input="setImgDescription"
        type="text"
        id="img-desc"
        placeholder="Your description..."
      ></textarea>

      <input class="btn-add" type="submit" value="Submit" />
    </form>
    <div v-for="(g, i) in gallery" class="gallery" :key="i">
      <a>
        <img :src="g.imgSrc" :alt="g.imgAlt" />
      </a>
      <div class="desc">
        <template v-if="g.showDescription">
          <p>{{g.description}}</p>
          <button
            class="show-desc"
            :class="createBinding(i)"
            @click="g.showDescription = false"
          >Show less</button>
        </template>
        <template v-else>
          <button
            class="show-desc"
            v-bind:class="{ odd: i % 2 !== 0, even: i % 2 === 0 }"
            @click="toggleDescription(g)"
          >Show more</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      gallery: [
        {
          imgSrc: "img/img_5terre.jpg",
          imgAlt: "Cinque Terre",
          showDescription: false,
          description:
            "Die Region zählt etwa 7000 Einwohner und ist als Nationalpark geschützt, in dem nichts gebaut oder verändert werden darf. Im Jahr 1997 wurden die Cinque Terre zusammen mit Porto Venere und den Inseln Palmaria, Tino und Tinetto zum UNESCO-Weltkulturerbe erklärt."
        },
        {
          imgSrc: "img/img_forest.jpg",
          imgAlt: "Forest",
          showDescription: false,
          description:
            "Wald (Waldung) im alltagssprachlichen Sinn und im Sinn der meisten Fachsprachen ist ein Ausschnitt der Erdoberfläche, der mit Bäumen bedeckt ist und eine gewisse, vom Deutungszusammenhang abhängige Mindestdeckung und Mindestgröße überschreitet. Die Definition von Wald ist notwendigerweise vage[1] und hängt vom Bedeutungszusammenhang (alltagssprachlich, geographisch, biologisch, juristisch, ökonomisch, kulturell…) ab."
        },
        {
          imgSrc: "img/img_lights.jpg",
          imgAlt: "Northern Lights",
          showDescription: false,
          description:
            "Northern Lights (Zamnesia Seeds) feminisiert. Ganz einfach ein spektakuläres Cannabisexemplar - Northern Lights hat die Zeiten überdauert und wurde zu einer der wohl beliebtesten Sorten aller Zeiten. Sie benötigt für die Blüte nur 7-8 Wochen, ist eine kräftige Pflanze und ein gut bestückter Lieferant."
        },
        {
          imgSrc: "img/img_mountains.jpg",
          imgAlt: "Mountains",
          showDescription: false,
          description:
            "Ein Berg ist eine Landform, die sich über die Umgebung erhebt. Er ist meist höher und steiler als ein Hügel, wobei es keine Definition zur genauen Unterscheidung und Abgrenzung beider Geländeformen gibt. Ein Berg sollte sich durch eine gewisse Eigenständigkeit auszeichnen, also genügend Abstand von anderen Bergen und eine Mindesthöhe über einem Pass aufweisen. Gegenstück ist das Tal."
        }
      ],
      message: "My custom gallery!",
      imgSrc: "",
      imgAlt: "",
      imgDescription: "",
      counter: 60,

      interval: null
    };
  },
  methods: {
    createBinding(i) {
      return { odd: i % 2 !== 0, even: i % 2 === 0 };
    },
    toggleDescription(galleryItem) {
      this.message = "edit message";
      galleryItem.showDescription = !galleryItem.showDescription;
    },
    login() {},
    setImgSource(e) {
      const value = e.target.value;
      this.imgSrc = value;
    },
    setImgAlt(e) {
      const value = e.target.value;
      this.imgAlt = value;
    },
    setImgDescription(e) {
      const value = e.target.value;
      this.imgDescription = value;
    },
    addImage(msg, e) {
      console.log(msg);
      console.dir(e.target);
      this.gallery.push({
        imgSrc: this.imgSrc,
        imgAlt: this.imgAlt,
        description: this.imgDescription,
        showDescription: false
      });
      this.imgSrc = "";
      this.imgAlt = "";
      this.imgDescription = "";
    },
    start() {
      this.interval = setInterval(() => {
        this.counter--;
      }, 1);
    }
  },
  computed: {
    getLargestDescription() {
      return [...this.gallery].sort(
        (a, b) => b.description.length - a.description.length
      )[0].description;
    },
    count() {
      return this.gallery.length;
    }
  },
  watch: {
    counter: function(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if (newValue === 0) {
        alert("Game has ended!");
        this.counter = 0;
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-item-btn {
  background-color: #008cba;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
textarea {
  resize: none;
}
div.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
}
button.show-desc,
.btn-add {
  background-color: #008cba;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
button.show-desc.odd {
  background-color: #008cba;
}
button.show-desc.even {
  background-color: red;
}
button.show-desc.decoration {
  border: 5px solid black;
}
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}
div.gallery:hover {
  border: 1px solid #777;
}
div.gallery img {
  width: 100%;
  height: auto;
}
div.desc {
  padding: 15px;
  text-align: center;
}
</style>
