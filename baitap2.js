function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;

    if( n <=1) {
        flag = false;
    }else {
        for( i = 2 ; i < n;i++) {
            console.log(i);
            console.log(n);
            if(n % i == 0 ){
                flag = false;
                break;
            }
        }
    }


    // Kiểm tra biến flag
    if (flag == true){
        document.write(n + " là số nguyên tố <br/>");
    }
    else{
        document.write(n + " không phải là số nguyên tố <br/>");
    }
}
kiem_tra_snt(19)
