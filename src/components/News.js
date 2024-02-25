import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "Nancy Armour",
        "title": "Winter Cup 2024 live updates: Scores, results as Suni Lee headlines USA Gymnastics event",
        "description": "Tokyo all-around gold medalist Suni Lee returns, and the Olympic season officially gets underway at the Winter Cup.",
        "url": "https://www.usatoday.com/story/sports/olympics/2024/02/24/us-gymnastics-winter-cup-live-updates/72715658007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/23/USAT/72714725007-usatsi-22593972.jpg?crop=3970,2234,x0,y132&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2024-02-24T16:38:29+00:00",
        "content": "Let the Olympic year officially begin!\r\nNot only does Winter Cup on Saturday mark the return of Suni Lee, it kicks off the all-important season that will culminate in this summers Paris Olympics. Mor… [+5166 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Jessica Conditt",
        "title": "Let's talk about Xbox | This week's gaming news",
        "description": "The week's headlines, now in video form!",
        "url": "https://www.engadget.com/lets-talk-about-xbox--this-weeks-gaming-news-151608942.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/si2C.UU2Xb1DcStg0YHIOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/3804cb40-d27c-11ee-b9ee-bea135711aac",
        "publishedAt": "2024-02-24T15:16:09Z",
        "content": "No one is suggesting that Microsoft should stop making video game hardware. What we've been considering, here in the dark and twisted Engadget Slack channels, is whether Microsoft should keep making … [+6500 chars]"
    },
    {
        "source": {
            "id": "talksport",
            "name": "TalkSport"
        },
        "author": "161385360554578",
        "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
        "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today’s headlines: Mikel Arteta dodges David Raya question after goalkeeper’s errors Declan Ri…",
        "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
        "publishedAt": "2023-12-06T09:06:42Z",
        "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
    },
    {
        "source": {
            "id": "the-lad-bible",
            "name": "The Lad Bible"
        },
        "author": null,
        "title": "Latest News - Todays Breaking News Headlines & Exclusives | LADbible",
        "description": "The latest breaking news from around the world on LADbible. Exclusive stories and the best coverage giving you the news as you want it.",
        "url": "https://www.theladbible.com/news",
        "urlToImage": null,
        "publishedAt": "2021-06-16T09:22:43.3050014Z",
        "content": "It's definitely worth a go, isn't it?"
    }
];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>💩 NEWS - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title.slice(0,40)}
                description={element.description.slice(0,80)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
