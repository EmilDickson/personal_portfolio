// Template for project thumbnails
Vue.component("project-thumbnail", {
  props: ["pimage"],
  template:
    '<a :href="pimage.link"><div class="projectThumbnail"><img :src="pimage.thumbnail" :alt="pimage.name"/><p>{{ pimage.name }}</p></div></a>'
});
// Template for main window components
Vue.component("project-page", {
  props: ["project"],
  template:
    '<div class="projectPage" id="{{ project.id }}"><h2>{{ project.name }}</h2>{{ project.images }}<p>{{ project.description }}</p></div>'
});
// Main window, populated by thumbnails
var mainWindow = new Vue({
  el: "#projects",
  data: {
    projects: [
      {
        id: 0,
        name: "Weather Jukebox",
        thumbnail: "projects/WeatherJukebox/tn.png",
        link: "projects/WeatherJukebox/"
      },
      {
        id: 1,
        name: "Coffee Run",
        thumbnail: "projects/CoffeeRun/cr.png",
        link: "projects/CoffeeRun/"
      },
      {
        id: 2,
        name: "RiksdagsViz",
        thumbnail: "projects/RiksdagsViz/RiksdagsViz.png",
        link: "projects/RiksdagsViz/"
      },
      {
        id: 3,
        name: "FootPrint",
        thumbnail: "projects/FootPrint/FootPrint.png",
        link: "projects/FootPrint/"
      },
      {
        id: 4,
        name: "KubbAR",
        thumbnail: "projects/KubbAR/kar.png",
        link: "projects/KubbAR/"
      },
      {
        id: 5,
        name: "PodTalk",
        thumbnail: "projects/PodTalk/pd.png",
        link: "projects/PodTalk/"
      },
      {
        id: 6,
        name: "Salary Calculator",
        thumbnail: "projects/SalaryCalculator/scal.png",
        link: "projects/SalaryCalculator/"
      },
      {
        id: 7,
        name: "Simply Connect",
        thumbnail: "projects/SimplyConnect/scon.png",
        link: "projects/SimplyConnect/"
      },
      {
        id: 8,
        name: "Snake City Rockers",
        thumbnail: "projects/SnakeCity/scr.png",
        link: "projects/SnakeCity/"
      },
      {
        id: 9,
        name: "Under Isen",
        thumbnail: "projects/UnderIsen/ui.png",
        link: "projects/UnderIsen/"
      }
    ]
  }
});
