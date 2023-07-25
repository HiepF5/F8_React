###
```jsx
import {useSte} from 'react'
function Component(){
  const [state, setState] = useState(initState)
  ...
}
```
### Lưu ý
- component render sau 1 lần `setState`
- Inittial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial state với callback? ( Tạo tính toán phức tạo trong initial hoặc tạo 1 function, nó sẽ set dữ liệu trả về)
- Set state là thay thế state bằng giá trị mới - ( nên thay thế ES6 hoặc callback)

### Two-Way binding
### Mount/ UnMount