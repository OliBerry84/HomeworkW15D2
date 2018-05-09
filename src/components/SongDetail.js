import React from 'react';

const SongDetail = ({iTunesMusic}) => {

  return (
    <div>
      <h4>
        {iTunesMusic.feed.entry["im:name"].label}
      </h4>
    </div>
  )


};
export default SongDetail;
