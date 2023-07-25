memo _ usecallback
- Tránh tạo function mới không cần thiết
- Nếu có lỗi (phải dùng useCallback mới đúng thì cần xem xét lại logic, useCallback chỉ tối ưu)
- Nếu dùng useCallback thì component child phải dùng memo ( nếu ko cần dùng memo thì ko bao h cần dùng useCallback), 