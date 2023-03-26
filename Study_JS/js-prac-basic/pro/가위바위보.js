function solution(r){
    let answer = "";
    const a = r.split("")
    for(let i = 0; i<a.length; i++){
        if(a[i]==="0"){
            answer += "5"
        }else if(a[i]==="2"){
            answer += "0"
        }else{
            answer+="2"
        }

    }
    return answer;
}

//다른답
function solution(r){
    let arr ={
        2:0,
        0:5,
        5:2
    };
    let answer = [...r].map(v=>arr[v]).join("");
    return answer;
}