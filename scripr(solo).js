function Interpolation (t,A){
    var mid,low = 0,high = A.length-1;
    while (A[low] < t){
        mid = low = Math.floor((t - A[low])*(high-low)/(A[high])-A[low]);
        if(A[mid] < t) low = mid+1;
        else if (A[mid] > t) high = mid -1;
        else return mid;
    }
    if (A[low === t] ) return low;
    else if (A[high] === t) return high;
    else return -1;
    
}