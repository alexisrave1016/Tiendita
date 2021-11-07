 
export const fileUpload = async (file) =>{
    //firebaseSprint3
       const cloudUrl = 'https://api.cloudinary.com/v1_1/dd01p9lb9/upload';
       const formData = new FormData();
       formData.append('upload_preset','firebaseSprint3');
       formData.append('file',file);
       
       try{
           const resp = await fetch(cloudUrl, {
               method: 'POST',
               body: formData
           })
    
           if(resp.ok){
               const cloudResp = await resp.json();
               return cloudResp.secure_url;
           }else{
               throw await resp.json();
           }
    
       }catch(error){
           throw error;
       }
   }
   