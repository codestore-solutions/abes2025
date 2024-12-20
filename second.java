import java.util.*;

public class second {

    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static int[] sortArray(int[] arr) {
        List<Integer> primes = new ArrayList<>();
        List<Integer> nonPrimes = new ArrayList<>();

        for (int num : arr) {
            if (isPrime(num)) {
                primes.add(num);
            } else {
                nonPrimes.add(num);
            }
        }

        Collections.sort(primes, Collections.reverseOrder());
        Collections.sort(nonPrimes, Collections.reverseOrder());

        List<Integer> result = new ArrayList<>();
        if (!primes.isEmpty()) {
            result.add(primes.get(0)); // Largest prime
        }
        result.addAll(nonPrimes); // Add non-prime numbers
        if (primes.size() > 1) {
            result.add(primes.get(primes.size() - 1)); // Smallest prime
        }

        // Convert list back to array
        return result.stream().mapToInt(i -> i).toArray();
    }

    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int a=sc.nextInt();
        int arr[]=new int[a];
        for(int i=0;i<a;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println(Arrays.toString(sortArray(arr))); 
    }
}
