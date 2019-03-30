// 액션은 객체이다
// action creator: 액션을 생성한 펑션
export const updateUser = (name) => ({
  type: 'updateUser',
  payload:
    {
      user: name
    }
});