// urlUtils.js
export function getUsernameFromURL() {
    const currentURL = window.location.href;
    const urlSegments = currentURL.split('/');
    return urlSegments[4];
    // return "ndrfdelhi";
  }
export function getBack(){
    const backendurl ="https://video.ddks.live";
    return backendurl
}

export  function getCoords(){
  let link=`${getBack()}/user/${getUsernameFromURL()}/coords`;
  const response=  fetch(link).then(resp=>resp.json());
  
  console.log(response);
  return response;
} 