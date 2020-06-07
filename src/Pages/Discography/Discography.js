import React from 'react';
import '../styles/pages.css'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import './discography.css'

const consciousPilotData = [
  {
    project: 'Conscious Pilot',
    albums: [
      {
        title: 'In Flight: Vol 1',
        description: `This live album is a compilation of the best live cuts from Conscious Pilot’s 2019 tours. The live multitrack recordings, coming from various different sources, were all mixed and mastered by Ricky Feria. All of the songs in this Live Album are original Conscious Pilot songs written and composed by Feria and the rest of the band (Chris Freeman, Alex Bass, Jake Gust).This live album is a compilation of the best live cuts from Conscious Pilot’s 2019 tours. The live multitrack recordings, coming from various different sources, were all mixed and mastered by Ricky Feria. All of the songs in this Live Album are original Conscious Pilot songs written and composed by Feria and the rest of the band (Chris Freeman, Alex Bass, Jake Gust).`,
        iframeSource: 'https://open.spotify.com/embed/album/5xpYRXnp0WMSXXPTAUZRAl',
      },
      {
        title: 'Strange World',
        description: 'The debut full length LP from Conscious Pilot was recorded over the course of 2 years spanning from fall of 2017 to the fall of 2019. This album was recorded in Feria’s home studio in Columbus, OH with help from producer/engineer John Neumeier. All of the mixing and producing work was done by Feria as well as many over dubs giving this concept album a full and unique sound. Mastered by Grammy Nominee Brian Lucey.',
        iframeSource: 'https://open.spotify.com/embed/album/4nYbYR5OCxDA6GjSN0XGI2'
      }
    ]
  }
];
const rixData = [
  {
    project: 'Rix',
    albums: [
      {
        title: 'Suede',
        description: 'This 3 song EP from Feria’s electronic alias, Rix, was produced, mixed and mastered by himself in his home studio in Columbus, OH. Using mostly electronic samples, both analog and digital, Feria blends sounds from his guitar, Rhodes piano, other instruments and vocal samples to bring a unique sound.',
        iframeSource: 'https://open.spotify.com/embed/album/35EgJIQBmlYJaNSKmFI10d'
      }
    ]
  }
];

const joyRideData = {
  project: 'Joyride',
  albums: [
    {
      title: 'Joyride',
      description: 'This debut full length LP from the 4 piece Joyride was recorded, mixed and mastered by Ricky Feria. Feria not only produced this record but plays the drum set in all of the tracks. Singer Leah Nourse’ powerful and soulful voice along the bluesy guitar riffs of brother Jack Nourse blend well for a great alternative blues record.',
      iframeSource: 'https://open.spotify.com/embed/album/5emSoy7AEYKtjduaYZUiJp'
    }

  ]
}

// youtube, apple music, google, bandcamp, sound cloud 

export default function Discography() {
  let { path, url } = useRouteMatch();

  const album = ({ iframeSource, title, description }) => (
    <div className='album'>
      <div className='player'>
        <iframe src={iframeSource} title={title} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className='album-text'>
        <div className='sub-title'>{title}</div>
        {description}
      </div>
    </div>
  );

  const projectDiscography = ({ albums, project }) => (
    <>
      <div className='title'>
        {project}
      </div>
      {
        albums.map(a => album(a))
      }
    </>
  );

  const consciousPilot = (
    projectDiscography(consciousPilotData[0])
  );
  const rix = (
    projectDiscography(rixData[0])
  );
  const other = (
    projectDiscography(joyRideData)
  );

  return (
    <div>
      <Switch>
        <Route path={`${path}/conscious-pilot`}>
          {consciousPilot}
        </Route>
        <Route path={`${path}/rix`}>
          {rix}
        </Route>
        <Route path={`${path}/other`}>
          {other}
        </Route>
      </Switch>
    </div>
  );
}