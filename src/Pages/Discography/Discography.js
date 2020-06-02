import React from 'react';
import '../styles/pages.css'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import './discography.css'
const asdf = `Lorem ipsum dolor sit amet, ullum omnium nam id. Eu nobis possit accumsan nec, est no dolor nemore putant. Sea autem liber id, an has fugit errem adipiscing. Te sed ignota accusam, at eos fastidii lucilius percipitur, eu mea error audiam. Ea nam persius principes.

Ei adhuc explicari democritum usu, qui at veri insolens. Enim soluta tincidunt quo cu, mea eligendi lobortis definitiones id. At vel idque novum, doming epicurei ad vim. Alia assueverit reformidans ne his. Nihil eruditi definitionem no usu, vel everti eripuit dignissim eu. No numquam civibus nec, nostro detracto ex usu.
`;
const consciousPilotData = [
  {
    project: 'Conscious Pilot',
    albums: [
      {
        title: 'In Flight: Vol 1',
        description: asdf,
        iframeSource: 'https://open.spotify.com/embed/album/5xpYRXnp0WMSXXPTAUZRAl',
      },
      {
        title: 'Strange World',
        description: asdf,
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
        description: asdf,
        iframeSource: 'https://open.spotify.com/embed/album/35EgJIQBmlYJaNSKmFI10d'
      }
    ]
  }
];

export default function Discography() {
  let { path, url } = useRouteMatch();

  const album = ({ iframeSource, title, description }) => (
    <div className='album'>
      <div>
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
  const other = <div>other</div>;

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