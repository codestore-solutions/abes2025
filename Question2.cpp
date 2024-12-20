#include<bits/stdc++.h>
using namespace std;

bool is_prime(int num) {
    if (num <= 1) {
        return false;
    }
    for (int i = 2; i <= sqrt(num); ++i) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

vector<int> rearrange_array(const vector<int>& arr) {
    vector<int> primes, non_primes;

    for (int num : arr) {
        if (is_prime(num)) {
            primes.push_back(num);
        } else {
            non_primes.push_back(num);
        }
    }

sort(non_primes.rbegin(), non_primes.rend());

    sort(primes.begin(), primes.end());

    vector<int> result;

    if (!primes.empty()) {
        result.push_back(primes.back());
        primes.pop_back();
    }

    result.insert(result.end(), non_primes.begin(), non_primes.end());

    if (!primes.empty()) {
        result.push_back(primes.front());
    }

    return result;
}

int main() {
    vector<int> arr1 = {5, 1, 8, 11, 2};
    vector<int> arr2 = {1, 6, 4, 13, 9, 3};

    vector<int> result1 = rearrange_array(arr1);
    vector<int> result2 = rearrange_array(arr2);

    cout << "Rearranged array 1: ";
    for (int num : result1) {
        cout << num << " ";
    }
   cout << endl;

 cout << "Rearranged array 2: ";
    for (int num : result2) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
