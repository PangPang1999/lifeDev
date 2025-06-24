# 排序

## 56. 合并区间（中等）

**Link**
https://leetcode.cn/problems/merge-intervals/description/

**题干**
以数组 `intervals` 表示若干个区间的集合，其中单个区间为 `intervals[i] = [starti, endi]` 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

**解答**

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][2];
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        List<int[]> result = new ArrayList<>();
        for (int[] interval : intervals) {
            if (result.size() == 0 || result.get(result.size() - 1)[1] < interval[0]) {
                result.add(interval);
            } else {
                result.get(result.size() - 1)[1] = Math.max(result.get(result.size() - 1)[1], interval[1]);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}
```

**思路**

1. 排序
    - 首先将区间数组按照每个区间的起始值（第一位数）进行升序排序。
2. 初始化结果列表
    - 创建一个列表 (`result`) 来存储合并后的区间。
3. 遍历与合并区间（遍历排序后的区间数组，执行以下判断）
    - 若当前`result`列表为空，或列表中最后一个区间的结束值小于当前区间的起始值，则表示区间之间无重叠，直接将当前区间加入`result`。
    - 否则，存在区间重叠，更新列表中最后一个区间的结束值为：` max(原最后区间的结束值, 当前区间的结束值)`
4. 返回结果
    - 最后返回合并后的区间列表 (`result`)。

## 912. 排序数组（中等）

**Link**
https://leetcode.cn/problems/sort-an-array/description/

**题干**

给你一个整数数组 nums，请你将该数组升序排列。
你必须在 不使用任何内置函数 的情况下解决问题，时间复杂度为 O(nlog(n))，并且空间复杂度尽可能小。

**解答**

```java
class Solution {
    public int[] sortArray(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
        return nums;
    }

    public static void quickSort(int[] nums, int left, int right) {
        if (left >= right) return;

        // 随机化pivot，随机选一个位置和left交换
        // int randIndex = left + (int) (Math.random() * (right - left + 1));
        // int tmp = nums[randIndex];
        // nums[randIndex] = nums[left];
        // nums[left] = tmp;

        int pivot = nums[left];


        int i = left;
        int j = right;
        while (i < j) {
            while (i < j && nums[j] >= pivot) j--;
            while (i < j && nums[i] <= pivot) i++;
            if (i < j) {
                nums[i] = nums[i] ^ nums[j];
                nums[j] = nums[i] ^ nums[j];
                nums[i] = nums[i] ^ nums[j];
            }
        }
        nums[left] = nums[i];
        nums[i] = pivot;
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }
}
```

**思路（采用递归）**

1. 设置基准值 pivot
    - 一般选取当前区间最左侧的数作为基准值（pivot），为了避免出现极端情况（如数组本身有序，导致退化为 O(n²)），可以采用随机选取 pivot，将随机选中的值与最左侧交换。
2. 左右指针法进行划分
    - 定义两个指针 `i`（左）和 `j`（右），分别指向当前排序区间的两端。
    - 先从右往左移动 `j`，直到找到一个比 pivot 小（或等于）的元素。
    - 再从左往右移动 `i`，直到找到一个比 pivot 大（或等于）的元素。
    - 如果 `i < j`，则交换这两个元素，继续进行左右指针的移动和交换。
3. pivot 归位
    - 此时 i （含 i）左边都比 pivot 小，右边都比 pivot 大，那么 i 的位置就是 pivot 值的位置
    - 举例`[3, 6, 1, 7, 5]`
        - 若第一次选择了 3 为 pivot，那么第一次交换后，为`[1, 6, 3, 7, 5]`
            - i 在 1 的位置（index=0），while 就结束了
        - 若第一次选择了 6 为 pivot，那么第一次交换后，为`[6, 3, 1, 5, 7]`
            - i 在 5 的位置，将 5 给到最左边的 6，将 pivot 给到 5，即`[5, 3, 1, 6, 7]`
            - 将 i 左右两边继续 quicksort

## 215. 数组中的第 K 个最大元素（中等）

**Link**
https://leetcode.cn/problems/kth-largest-element-in-an-array/

**题干**

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

**解答**

```java
class Solution {
    public int findKthLargest(int[] nums, int k) {
        quickSortRe(nums, 0, nums.length - 1);
        // Arrays.sort(nums);
        return nums[nums.length - k ];
    }

    private static void quickSortRe(int[] nums, int left, int right) {
        if (left >= right) return;
        int pivot = nums[left];
        int i = left;
        int j = right;
        while (i < j) {
            while (i < j && nums[j] >= pivot) j--;
            while (i < j && nums[i] <= pivot) i++;
            if (i < j) {
                int tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
        nums[left] = nums[i];
        nums[i] = pivot;
        quickSortRe(nums, left, i - 1);
        quickSortRe(nums, i + 1, right);
    }
}
```

**思路**

1. 使用 912 的快排，然后直接给出第 k 个最大元素，第 k 个最大元素的索引是`nums.length - k`
2. 或者 `Arrays.sort(nums);`

## 349. 两个数组的交集（简单）

**Link**
https://leetcode.cn/problems/intersection-of-two-arrays/description/

**题干**

给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

**解答**

```java
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set = Arrays.stream(nums1).boxed().collect(Collectors.toSet());
        return Arrays.stream(nums2)
                .filter(set::contains)
                .distinct().
                toArray();
    }
}
```

**思路**

1. 直接使用 stream，boxed 的作用是将基本类型流（如 `IntStream`）转为对应的对象类型流（如 `Stream<Integer>`）
    1. 基本类型流（如 IntStream、LongStream、DoubleStream）也能直接 collect，但只能收集为基本类型相关的容器或特定操作。
    2. 想收集成 “对象类型集合”（如 `List<Integer>`、`Set<Integer>`）时，必须 `boxed()` 之后才能收集。

# 二分查找

## 704. 二分查找（简单）

**Link**
https://leetcode.cn/problems/binary-search/description/

**题干**

给定一个 `n` 个元素有序的（升序）整型数组 nums 和一个目标值 `target` ，写一个函数搜索 `nums` 中的 `target`，如果 `target` 存在返回下标，否则返回 -1。
你必须编写一个具有 O(log n) 时间复杂度的算法。

**解答**

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int midIndex = (left + right) / 2;
            if (nums[midIndex] == target) return midIndex;
            else if (nums[midIndex] < target) left = midIndex + 1;
            else right = midIndex - 1;
        }
        return -1;
    }
}
```

**思路**

1. While 循环
    1. 获取数组中间索引的值
    2. 比较该值与 target
        1. 若该值等于 target 则直接返回所有
        2. 若该值小于 target，说明 target 可能存在于该值的右侧，更新左边界 left=index+1
        3. 若该值大于 target，说明 target 可能存在于该值的左侧，更新右边界 right=index-1
2. 如果 while 后依旧找不到，返回-1

## 33. 搜索旋转排序数组（中等）

**Link**
https://leetcode.cn/problems/search-in-rotated-sorted-array/description/

**题干**

整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`（下标 从 0 开始 计数）。例如， `[0,1,2,4,5,6,7]` 在下标 3 处经旋转后可能变为 `[4,5,6,7,0,1,2]` 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

**解答**

```java
class Solution {
    public int search(int[] nums, int target) {
        if (nums.length == 0) return -1;
        if (nums.length == 1) return nums[0] == target ? 0 : -1;
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int midIndex = (left + right) / 2;
            if (nums[midIndex] == target) return midIndex;
            if (nums[left] <= nums[midIndex]){
                if(nums[left] <= target && target < nums[midIndex]) right = midIndex - 1;
                else left = midIndex + 1;
            }else {
                if(nums[midIndex] < target && target <= nums[right]) left = midIndex + 1;
                else right = midIndex - 1;
            }
        }
        return -1;
    }
}
```

**思路**

1. 设置边界 left、right
2. 在不断缩小边界中进入循环
    1. 获取中间数的索引
    2. 如果中间数符合 target，直接返回
    3. 通过`if (nums[left] <= nums[midIndex])`判断左边是否有序
        1. 判断是否在这个区间
            1. 如果在，则右边逐步缩小边界寻找
            2. target 不在这个区间，直接将左边界设置为 midIndex+1（排除一半）
    4. 如果右边有序（左右必然有一边有序）
        1. 判断是否在这个区间
            1. 如果在，则左边逐步缩小边界寻找
            2. target 不在这个区间，直接将右边界设置为 midIndex-1（排除一半）
3. 如果 while 后依旧找不到，返回-1

## 69. x 的平方根（简单）

**Link**
https://leetcode.cn/problems/sqrtx/description/

**题干**

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
注意：不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x **0.5` 。

**解答**

```java
class Solution {
    public int mySqrt(int x) {
        // return (int)Math.pow(x, 0.5);
        int left = 1;
        int right = x;
        int ans = 0;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if ((long) mid * mid == x) return mid;
            else if ((long) mid * mid < x) {
                ans = mid;
                left = mid + 1;
            } else right = mid - 1;
        }
        return ans;
    }
}
```

**思路**

1. 非负整数，也就是 x 可能等于 0，0 的算数平方也是 0，设置默认返回值 ans 为 0 可以避免处理 0
2. 边界在 1-x 之间（1<0 时会之间返回 ans 默认值 0）
3. while
    1. 取中间值，判断
        1. 这个值的二次方是否等于 x
        2. 是否小 x
            1. 如果是，则说明中间值偏小了，但是并不能确定这个值是不是舍去小数后的所需 ans，所以设置 ans 为 mid，并继续在右边查找，更新左边界为 mid+1
            2. 如果否，说明中间值偏大，更新右边界为 mid-1
4. 返回 ans

# 冒泡排序

外循环：控制当前未排序部分的右边界，每一轮都会减少需要排序的元素个数。
内循环：依次比较相邻的两个元素，如果左边的大于右边，就交换它们（把较大的“冒泡”到右边）。

没啥好说的

# 逆转

## 344. 反转字符串（简单）

**Link**
https://leetcode.cn/problems/reverse-string/description/

**题干**

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

**解答**

```java
class Solution {
    public void reverseString(char[] s) {
        if (s.length == 0) return;
        for (int i = 0; i < s.length / 2; i++) {
            char temp = s[i];
            s[i] = s[s.length - 1 - i];
            s[s.length - 1 - i] = temp;
        }
        System.out.println(new String(s));
    }
}
```

**思路**

1. 往前数一半，依次和后面对称位互换
2. 单双均使用`s.length / 2`
    1. 单数时，`s.length / 2`指向最中间的不用换的位置
    2. 双数时，`s.length / 2`指向对称轴右边第一位

## 206. 反转链表（简单）

**Link**
https://leetcode.cn/problems/reverse-linked-list/description/

**题干**

给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

**解答**

```java
class Solution {
    public ListNode reverseList(ListNode head) {
        // 设置最终结果List
        ListNode finalList = null;

        ListNode current = head;
        while (current != null) {
            ListNode temp = current.next;
            current.next = finalList;
            finalList = current;
            current = temp;
        }
        return finalList;

    }
}
```

**思路**

1. ListNode 类型题需要注意的是，节点代表“引用”
2. 创建一个 finalList 用语存放最终的结果
3. 通过技巧完成交换
    1. 创建 temp = current.next，临时存放 current.next，独立，便于最后还给 current 换成迭代
    2. `current.next = finalList;`，
    3. `finalList = current;`通过 2 和 3 的操作，使 current 的首位，放在了 finalList 的首位
    4. `current = temp;`将 temp 还给 current

## 92. 反转链表 II（中等）

**Link**
https://leetcode.cn/problems/reverse-linked-list-ii/description/

**题干**

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

**解答**

```java
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;
        ListNode prev = dummyHead;
        for (int i = 1; i < left; i++) {
            prev = prev.next;
        }
        ListNode cur = prev.next;
        for (int i = 0; i < right - left; i++) {
            ListNode temp = cur.next;
            cur.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
        }
        return dummyHead.next;
    }
}
```

**思路**

1. 理解替换思路：找到 left 点，定义为 cur 点，cur 点前到一个点为 pre 点，通过交换，依次将 cur 点后的点，拿到 pre 点的下一个点，循环 right-left 次。cur 在依次往后推的过程中，将一个个点转移到 pre 点的下一个点。
2. 头节点声明，由于需要一个 pre 点做一个基准点，所以需要先引入一个 dummyHead，将目标 head 接在 dummyHead 后面

## 151. 反转字符串中的单词（中等）\*

**Link**
https://leetcode.cn/problems/reverse-words-in-a-string/description/

**题干**

给你一个字符串 s ，请你反转字符串中 单词 的顺序。

单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。

返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。

注意：输入字符串 s 中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

**解答**

```java
// 解1
class Solution {
    public String reverseWords(String s) {
        // 除去开头和末尾的空白字符
        s = s.trim();
        // 正则匹配连续的空白字符作为分隔符分割
        List<String> wordList = Arrays.asList(s.split("\\s+"));
        Collections.reverse(wordList);
        return String.join(" ", wordList);
    }
}

// 解2
// 双指针

```

# 平均分配

## 1011. 在 D 天内送达包裹的能力

**Link**
https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/

**题干**

传送带上的包裹必须在 days 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量（weights）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 days 天内将传送带上的所有包裹送达的船的最低运载能力。

**解答**

```java
class Solution {
    public int shipWithinDays(int[] weights, int days) {
        int left = Arrays.stream(weights).max().getAsInt();
        int right = Arrays.stream(weights).sum();
        while (left < right) {
            int mid = (left + right) / 2;
            int count = 0;
            int need = 1;
            for (int i : weights) {
                if (count + i > mid) {
                    need++;
                    count = 0;
                }
                count += i;
            }
            if (need > days) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
```

**思路**

1. 传送带的概念
    1. 只能依次拿，不能自由组装，也就是必须按顺序
2. 弄清边界
    1. 最小一次能运最大的那个数，即 left 为 max
    2. 最大能一次全运完，即 right 为 sum
3. 取中间值，循环二分
    1. 中间值运载量是否满足能在规定天数内运完呢
        1. 过程：
            1. 无论什么运载量，至少一天，need 初始值为 1，每天的运输量 count=0
            2. 遍历，累加，设置前置条件：如果大于了 count，need++，count=0。否则 count 继续累加
        2. 如果所需天数超了，那么说明运载量不够，将左边界设置为 mid+1
        3. 若该天数没有超，说明运载量可以往下降试试，将右边界设置为 mid

## 875. 爱吃香蕉的珂珂

**Link**
https://leetcode.cn/problems/koko-eating-bananas/description/

**题干**

珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

**解答**

```java
class Solution {
    public int minEatingSpeed(int[] piles, int h) {
    int left = 1;
    int right = Arrays.stream(piles).max().getAsInt();
    while (left < right) {
        int mid = (left + right) / 2;
        int needH = 0; // 每一堆都要加小时
        for (int i : piles) {
			needH += (i + mid - 1) / mid;
        }
        if (needH > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
    }
}
```

**思路**

0. 需要记住向上取整公式

1. 弄清边界
    1. 每次最少能吃的数量为 1，即 left=1
    2. 每次最多一次能吃一堆，即 right=max
2. 取中间值，循环二分
    1. 使用 上取整除公式 得到每堆所需要的小时数`needH += (i + mid - 1) / mid;`
    2. 如果超，将左边界设置为 mid+1
    3. 如果少，将右边界设置为 mid

# 策略模式

## 146. LRU 缓存（中等）\*

**Link**
https://leetcode.cn/problems/lru-cache/solutions/259678/lruhuan-cun-ji-zhi-by-leetcode-solution/

**题干**

请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。
实现 `LRUCache` 类：

- `LRUCache(int capacity)` 以 正整数 作为容量 `capacity` 初始化 LRU 缓存
- `int get(int key)` 如果关键字 `key` 存在于缓存中，则返回关键字的值，否则返回 `-1` 。
- `void put(int key, int value)` 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 `key-value` 。如果插入操作导致关键字数量超过 `capacity` ，则应该 逐出 最久未使用的关键字。
- 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

**解答**

```java
// 解1，使用默认参数，重写 removeEldestEntry
class LRUCache extends LinkedHashMap<Integer, Integer> {

	private int capacity;

	public LRUCache(int capacity) {
		super(capacity, 0.75F, true);
		this.capacity = capacity;
	}

	public int get(int key) {
		return super.getOrDefault(key, -1);
	}

	public void put(int key, int value) {
		super.put(key, value);
	}

	@Override
	protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
		return size() > capacity;
	}
}

// 解二：哈希表 + 双向链表
```

## 1043. 分隔数组以得到最大和（中等）

**Link**
https://leetcode.cn/problems/partition-array-for-maximum-sum/description/

**题干**

给你一个整数数组 arr，请你将该数组分隔为长度 最多 为 k 的一些（连续）子数组。分隔完成后，每个子数组的中的所有值都会变为该子数组中的最大值。

返回将数组分隔变换后能够得到的元素最大和。本题所用到的测试用例会确保答案是一个 32 位整数。

**解答**

```java
    public static int maxSumAfterPartitioning(int[] arr, int k) {
        int n = arr.length;
        int[] dp = new int[n + 1];
        dp[0] = 0;
        for (int i = 1; i <= n; i++) {
            int max = 0;
            for (int len = 1; len <= k && i - len >= 0; len++) {
                max = Math.max(max, arr[i - len]);// 拿到当前值，通过该方式获取 len 上最大的数
                dp[i] = Math.max(dp[i], dp[i - len] + max * len);
            }
        }
        return dp[n];
    }

	public int maxSumAfterPartitioning2(int[] arr, int k) {
        int n = arr.length;
        int[] dp = new int[n]; // 只用 n 大小的数组
        for (int i = 0; i < n; i++) {
            int max = 0;
            // 只考虑最后一段长度为 len 的区间
            for (int len = 1; len <= k && i - len + 1 >= 0; len++) {
                max = Math.max(max, arr[i - len + 1]);
                int pre = i - len >= 0 ? dp[i - len] : 0;
                dp[i] = Math.max(dp[i], pre + max * len);
            }
        }
        return dp[n - 1];
    }
```

**思路**

1. 动态规划
2. 计算思路 1：
    1. 从左到右推（for 循环），计算到达当前索引时，能取到的最大值
    2. 在不断推进的过程中，将最右边节点逐步往左推 k 次（for 循环），需要处理前 k 步时的左边界问题，每次都将从最右边节点开始，逐步比较值，获取这个节点的最大值
        1. 在这个从右往左的过程中，假设已经走到了长度 i，计算 `i-len`上的值，加上`len * len 中 max`，在往后推的过程中取一个最大值
        2. 由于需要由上一个节点，也就是`i-len`上的值，如果 i=0 会发生越界问题，所以设置一个大一位的数组，将 0 位置设置为 0 便于计算和
3. 计算思路 2:
    1. 和上述思路相似，创建长度为 n 的数组存储结果，而非 n+1
    2. 使用`int pre = i - len >= 0 ? dp[i - len] : 0;`判断前 k 位数的边界问题

## 面试题 16.02. 单词频率（中等）

**Link**
https://leetcode.cn/problems/words-frequency-lcci/description/

**题干**
设计一个方法，找出任意指定单词在一本书中的出现频率。

你的实现应该支持如下操作：

WordsFrequency(book)构造函数，参数为字符串数组构成的一本书
get(word)查询指定单词在书中出现的频率

**解答**

```java
class WordsFrequency {

    private HashMap<String, Integer> map = new HashMap<>();

    public WordsFrequency(String[] book) {
        for (String word : book) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
    }

    public int get(String word) {
        return map.getOrDefault(word, 0);
    }
}
```

**思路**

1. 基础 Map（为啥是中等题，不该是简单题吗？）

# 工厂模式

## 面试题 02.07. 链表相交（简单）

**Link**
https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/description/

**题干**
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

**解答**

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode pA = headA, pB = headB;
        while (pA != pB) {
            if (pA == null) pA = headB;
            else pA = pA.next;

            if (pB == null) pB = headA;
            else pB = pB.next;
        }
        return pA;
    }
}
```

**思路**

1. 单链表的意思：只要两个链表出现一个交点，后面则完全一致
2. 思想：两条节点 a 和 b，那么 a+b 和 b+a，使两者长度相等了，而如果两者出现交点，后面的内容必然完全一致，也就是前面必然出现交点

# 代理模式

## 208. 实现 Trie 前缀树（中等）

**Link**
https://leetcode.cn/problems/implement-trie-prefix-tree/description/

**题干**
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补全和拼写检查。

请你实现 Trie 类：

- `Trie()` 初始化前缀树对象。
- `void insert(String word)` 向前缀树中插入字符串 `word` 。
- `boolean search(String word)` 如果字符串 `word` 在前缀树中，返回 `true`（即，在检索之前已经插入）；否则，返回 `false` 。
- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 `word` 的前缀之一为 `prefix` ，返回 true ；否则，返回 false 。

**解答**

```java
class Trie {
	private Trie[] children;
	private boolean isEnd;

	public Trie() {
		children = new Trie[26];
		// 默认为不是最后一个字母
		isEnd = false;
	}

	public void insert(String word) {
		Trie trie = this;
		for (char c : word.toCharArray()) {
			int index = c - 'a';
			if (trie.children[index] == null) {
				trie.children[index] = new Trie();
			}
			trie = trie.children[index];
		}
		trie.isEnd = true;
	}

	public boolean search(String word) {
		Trie trie = this;
		for (char c : word.toCharArray()) {
			int index = c - 'a';
			if (trie.children[index] == null) {
				return false;
			}
			trie = trie.children[index];
		}
		return trie.isEnd;
	}

	public boolean startsWith(String prefix) {
		Trie trie = this;
		for (char c : prefix.toCharArray()) {
			int index = c - 'a';
			if (trie.children[index] == null) {
				return false;
			}
			trie = trie.children[index];
		}
		return true;
	}
}
```

**思路**

1. 前缀数，先建 26 个分支，代表 26 个字母，使用 `char-a`便于使用索引存放避免越界，每个分支有 26 个分支。查询单词是否存在，则按分支往下差，并确定最后一位是否具有 end 标识，查询前缀则不用在乎 end 标识

## 面试题 17.10. 主要元素（简单）

**Link**
https://leetcode.cn/problems/find-majority-element-lcci/description/

**题干**
数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。

**解答**

```java
class Solution {
    public int majorityElement(int[] nums) {
        int candidate = 0, count = 0;
        for (int num : nums) {
            if (count == 0) {
                candidate = num;
                count = 1;
            } else if (num == candidate) {
                count++;
            } else {
                count--;
            }
        }

        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }
        if (count > nums.length / 2) return candidate;
        else return -1;
    }
}
```

**思路**

1. 这题有点取巧，只适用于最多的元素超过一半的情况，不适用于寻找最多的元素
2. 该方式为 Boyer-Moore 投票算法

## 面试题 16.26. 计算器（中等）

**Link**
https://leetcode.cn/problems/calculator-lcci/description/
**题干**
给定一个包含正整数、加(+)、减(-)、乘(\*)、除(/)的算数表达式(括号除外)，计算其结果。

表达式仅包含非负整数，`+， - ，*，/` 四种运算符和空格 。 整数除法仅保留整数部分。
**解答**

```java
class Solution {
    public int calculate(String s) {
    int num = 0;
    char sign = '+';
    Deque<Integer> stack = new ArrayDeque<>();

    s = s + "+";
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (Character.isDigit(c)) {
            num = num * 10 + (c - '0');
        } else if (c != ' ') {
            if (sign == '+') stack.push(num);
            else if (sign == '-') stack.push(-num);
            else if (sign == '*') stack.push(stack.pop() * num);
            else if (sign == '/') stack.push(stack.pop() / num);
            sign = c;
            num = 0;
        }
    }
    int result = 0;
    for (int n : stack) result += n;
    return result;
    }
}
```

**思路**

1. 先检测符号，将符号临时存放，再拿到数字
    1. 如果符号是`+`，将拿到的数字直接打入栈中
    2. 如果符号是`-`，将拿到的数字转负直接打入栈中
    3. 如果符号是`*`，将拿到的数字，与栈顶数字相乘，打入栈中
    4. 如果符号是`/`，将拿到的数字，让栈顶数字被除，打入栈中
2. 将栈中所有结果累加，得到结果
