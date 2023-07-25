 ### Ghi chú
- Hook
- HOC
- Render props
- Memo để ghi nhớ và tránh re-render component ko cần thiết
- render component cha thì sẽ component con, nhưng component con ko thay đổi props thì re-render là ko cần thiệt, nên có thể bọc component child vào memo để nó lưu và nếu prop ko thay đổi  của component đó ko thay đổi thì nó ko re-render
- nó chỉ re-render khi props của nó thay đổi , bọc memo thì chỉ ảnh hưởng đến performance