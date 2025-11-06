async function loadUsers() {
    try {
        const result = await apiRequest('/user/all', 'GET');
        const users = result.data;
        const tableBody = document.getElementById('user-table-body');

        if (users.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="text-center">
                        暂无用户数据，<a href="index.html" class="text-primary">去创建用户</a>
                    </td>
                </tr>
            `;
            return;
        }

        tableBody.innerHTML = users.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.phone || '未填写'}</td>
                <td>${user.email || '未填写'}</td>
                <td>${user.create_time.split(' ')[0]}</td>
                <td>${user.update_time}</td>
                <td>
                    <a href="user-detail.html?id=${user.id}" class="btn btn-sm btn-info btn-margin">详情</a>
                    <a href="user-edit.html?id=${user.id}" class="btn btn-sm btn-primary btn-margin">编辑</a>
                    <a href="user-versions.html?id=${user.id}" class="btn btn-sm btn-warning btn-margin">版本</a>
                    <button class="btn btn-sm btn-danger" onclick="deleteUser(${user.id}, '${user.username}')">删除</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('加载用户失败:', error);
        document.getElementById('user-table-body').innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-danger">加载失败，请刷新页面重试</td>
            </tr>
        `;
    }
}

async function deleteUser(userId, username) {
    if (!confirm(`确定要删除用户「${username}」吗？`)) {
        return;
    }

    try {
        const result = await apiRequest(`/user/delete/${userId}`, 'DELETE');
        showAlert(result.message, 'success');
        loadUsers();
    } catch (error) {
        console.error('删除用户失败:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadUsers);