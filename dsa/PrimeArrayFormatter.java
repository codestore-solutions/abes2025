package abes2025.dsa;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PrimeArrayFormatter {

    private static boolean isPrime(int number) {
        if (number <= 1)
            return false;
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0)
                return false;
        }
        return true;
    }

    public static int[] formatArray(int[] array) {
        List<Integer> primes = new ArrayList<>();
        List<Integer> nonPrimes = new ArrayList<>();

        for (int num : array) {
            if (isPrime(num)) {
                primes.add(num);
            } else {
                nonPrimes.add(num);
            }
        }

        Collections.sort(primes);

        nonPrimes.sort(Collections.reverseOrder());

        int[] result = new int[array.length];
        int index = 0;

        if (!primes.isEmpty()) {
            result[index++] = primes.get(primes.size() - 1);
            primes.remove(primes.size() - 1);
        }

        for (int num : nonPrimes) {
            result[index++] = num;
        }

        if (!primes.isEmpty()) {
            result[result.length - 1] = primes.get(0);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] array1 = { 5, 1, 8, 11, 2 };
        int[] array2 = { 1, 6, 4, 13, 9, 3 };

        int[] output1 = formatArray(array1);
        int[] output2 = formatArray(array2);

        System.out.println("Output 1: ");
        for (int num : output1) {
            System.out.print(num + " ");
        }
        System.out.println();

        System.out.println("Output 2: ");
        for (int num : output2) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
