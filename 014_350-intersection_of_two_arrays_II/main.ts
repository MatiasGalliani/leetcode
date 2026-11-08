function intersect(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      j++;
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return result;
}

function main() {
  let nums1: number[] = [1, 2, 2, 1];
  let nums2: number[] = [2, 2];
  console.log(intersect(nums1, nums2));
}

main();
