### useEffect
- side effect
### use
- update DOM
- call API
- Listen DOM events
- Cleanup
###
1. Callback luôn được gọi sau khi component mounted
###
1. useEffect(callback)
- gọi callback mỗi khi component render
- gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
- chỉ gọi 1 lần khi component mount
3. useEffect(callback, [dep1])
- callback sẽ gọi lại mỗi khi dependencies thay đổi
- cleanup function luôn được gọi trước khi component unmount
- cleanup function luôn được gọi trước khi callback được gọi ( trừ lần mounted)
### UseEffect
1. Cập nhật lại state
2. Cập nhật lại DOM (mutated)
3. Render lại UI
4. Gọi cleanup nếu deps thay đổi
5. Gọi useEffect callback
### UseLayoutEffect
1. Cập nhật lại state
2. Cập nhật lại DOM (mutated)
3. Gọi cleanup nếu deps thay đổi sync
4. Gọi useLayoutEffect callback sync
5. Render lại UI
