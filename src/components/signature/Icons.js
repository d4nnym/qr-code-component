import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub,faCodepen,faTwitter} from "@fortawesome/free-brands-svg-icons"

export default function Icons(){
  const webSites = [
    {
      href:"https://github.com/d4nnym",
      title:"to Danny's Github",
      alt:"github-danny",
      icon:faGithub
    },
    {
      href:"https://codepen.io/d4nnym",
      title:"to Danny's CodePen",
      alt:"codepen-danny",
      icon:faCodepen
    },
    {
      href:"https://twitter.com/dannymatute_",
      title:"to Danny's Twitter",
      alt:"twitter-danny",
      icon: faTwitter
    }
  ]

  const iconList = webSites.map((_webSite)=>
    <a key={_webSite.alt} href={_webSite.href} 
      rel="noopener noreferrer" 
      target="_blank">
        <FontAwesomeIcon 
          alt={_webSite.alt} 
          title={_webSite.title} 
          icon={_webSite.icon}
        />
    </a>
  )
  return(<div className="icons" role="list">{iconList}</div>)
}