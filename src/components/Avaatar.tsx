import Avatar from 'avataaars';

//decalre required props for avatar 
type pros={
  avatharstyle:any,
  hairColor:string,
  skincolor:string,
  gender:string,
}

const Avatars=({avatharstyle,hairColor,skincolor,gender}:pros)=>{

  let hair_color :any= {"blond":"Blonde","black":"Black","none":"Black","n/a":"Black","white":"SilverGray","blonde":"Blonde","auburn":"Auburn"};
  let skin_color :any = {"fair":"Light","brown":"Brown","gold":"Yellow","white":"Light","light":"Light"}
  let top_type:any = {"male":"ShortHairDreads01","female":"LongHairBigHair","n/a":"NoHair"};
  return (
    <>
      <Avatar
        avatarStyle="Circle"
        topType={top_type[gender]}
        hairColor={hair_color[hairColor] || "Brown"}
        skinColor={skin_color[skin_color] || "Brown"}
      />
    </>
  );
}

export default Avatars;