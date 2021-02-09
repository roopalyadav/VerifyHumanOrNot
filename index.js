random=[];
const container = document.getElementById('container');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const reset = document.getElementById('reset');
reset.style.visibility="hidden";
btn.style.visibility="hidden";
flag =false;
imagsrc=['https://picsum.photos/id/20/150', 'https://picsum.photos/id/22/150', 'https://picsum.photos/id/21/150', 'https://picsum.photos/id/24/150','https://picsum.photos/id/25/150']
function generateArray()
{
while(random.length!=5)
{
    let a=Math.floor(Math.random()*5+1);
    if(!random.includes(a))
    random.push(a);
}
while(random.length!=6)
{
    let a=Math.floor(Math.random()*5+1);
    if(random.includes(a))
    random.push(a);
}
console.log(random);
}


generateArray();
for(let i=0;i<6;i++)
{
  let child = document.createElement('img');
  child.setAttribute('src',imagsrc[random[i]-1]);
  let imgval = `img${random[i]-1}`;
  child.setAttribute('data-ns-test', imgval);
  child.setAttribute('id',i+1);
  container.appendChild(child);
}

var selectedImg=[];
reset.addEventListener('click',()=>{
    reset.style.visibility="hidden";
    btn.style.visibility="hidden";
    message.innerHTML=``;
    random=[];
    selectedImg=[];
    flag=false;
    
    generateArray();
    console.log(selectedImg);
    for(let i=0;i<6;i++)
    {
        let img = document.getElementById(i+1);
        img.setAttribute('src',imagsrc[random[i]-1]);
        let imgval = `img${random[i]-1}`;
        img.setAttribute('data-ns-test', imgval);

    }

    
    
})
document.querySelectorAll('img').forEach((img)=>{
    img.addEventListener('click',(e)=>{
        if(selectedImg.length>=2)
        return;
        
        let selectImg = e.target;
       
        selectedImg.push(selectImg.getAttribute('data-ns-test'));
        if(selectedImg.length==1)
        reset.style.visibility="visible";
        if(selectedImg.length==2)
        btn.style.visibility="visible";
        
    })
})


btn.addEventListener('click',()=>
{
    if(selectedImg.length==2 && !flag)
        {
            if(selectedImg[0]===selectedImg[1])
            {
                message.innerHTML=`You are a human. Congratulations!`;
            }
            else
            {
                message.innerHTML=`We can't verify you as a human. You selected the non-identical tiles.`;
            }
            flag=true;

        }
        btn.style.visibility="hidden";
        
})


