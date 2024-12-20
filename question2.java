import java.util.*;

public class question2 {

    public static void main(String[] args) {
        int[] arr1 = {5, 1, 8, 11, 2};
        int[] arr2 = {1, 6, 4, 13, 9, 3};

        System.out.println("Output 1: " + formatArray(arr1));
        System.out.println("Output 2: " + formatArray(arr2));
    }

    public static List<Integer> formatArray(int[] arr) {
        List<Integer> primes = new ArrayList<>();
        List<Integer> nonPrimes = new ArrayList<>();
        for (int num : arr) {
            if (isPrime(num)) {
                primes.add(num);
            } else {
                nonPrimes.add(num);
            }
        }

        if (primes.isEmpty()) {
            return new ArrayList<>();
        }

        int largestPrime = Collections.max(primes);
        int smallestPrime = Collections.min(primes);

        primes.remove(Integer.valueOf(largestPrime));
        primes.remove(Integer.valueOf(smallestPrime));

        nonPrimes.addAll(primes);

        nonPrimes.sort(Collections.reverseOrder());

        List<Integer> result = new ArrayList<>();
        result.add(largestPrime);
        result.addAll(nonPrimes);
        result.add(smallestPrime);

        return result;
    }

    public static boolean isPrime(int num) {
        if (num <= 1) return false;
        if (num == 2) return true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}
