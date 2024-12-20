def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def prime_arr(arr):
 
    p = [num for num in arr if is_prime(num)]
    np = [num for num in arr if not is_prime(num)]
     
    p.sort(reverse=True)
    np.sort(reverse=True)
    
     
    result = p[:-1] + np + [p[-1]]
    
    return result

 
arr = [5, 1, 8, 11, 2]
output = prime_arr(arr)
print(output)
