import java.util.*;
public class Array {
    public static boolean check(int n){
        int ctr=1;
        for(int i=2;i<=n;i++){
            if(n%i==0){
                ctr++;
            }
        }
        if(ctr==2){
            return true;
        }
        else{
            return false;
        }
    }
    public static void reverse(int[] a)
    {
        int n = a.length;
        for (int i = 0; i < n / 2; i++) {
            int t = a[i];
            a[i] = a[n - i - 1];
            a[n - i - 1] = t;
        }
    }
    public static void main(String[] args) {
        int arr[]={5,1,8,11,2};
        int max=0,min=10000;
        for(int i=0;i<arr.length;i++){
            if(check(arr[i])){
                max=Math.max(arr[i],max);
                min=Math.min(arr[i],min);
            }
        }
        
        
        int arr_desc[]=new int[arr.length-2];
        int k=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==max|| arr[i]==min){
                continue;
            }
            else{
                arr_desc[k++]=arr[i];
            }
        }
        Arrays.sort(arr_desc);
        reverse(arr_desc);
        arr[0]=min;
        arr[arr.length-1]=max;
        int j=1;
        for(int i=0;i<arr_desc.length;i++){
            arr[j++]=arr_desc[i];
        }
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+",");
        }
    }
}
