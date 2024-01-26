export const btnList = ["All", "Mixes", "Javascript", "Gaming", "Music", "Live", "Cricket", "Cooking"];

export const LiveChatCount=25;

export const YT_Videos_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YT_API_KEY}`

export const Video_Info_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YT_API_KEY}&id=`

export const Search_List_URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YT_API_KEY}&q=`

export const YT_Search_URL = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

export const searchIcon = "https://ik.imagekit.io/teamTaskTracker/images/search.svg?updatedAt=1704220639003";

export const hamburgerIcon = "https://cdn.icon-icons.com/icons2/2348/PNG/512/hamburger_icon_143010.png";

export const ytLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png";

export const userProfileIcon="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";


export const generateUniqueKey = () => {
    const currentDate = new Date();
    const uniqueKey = currentDate.getTime(); // Using the timestamp as a unique key
    return uniqueKey;
};