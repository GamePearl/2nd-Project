import { ArticleModel } from "../schemas/article"

const Article = {
  create: async ({ newArticle }) => {
    const createdNewArticle = await ArticleModel.create(newArticle)
    return createdNewArticle
  },

  findById: async ({ articleId }) => {
    const article = await ArticleModel.findOne({ articleId })
    return article
  },

  update: async ({ articleId, updateObject }) => {
    const filter = { articleId }
    const update = { $set: updateObject }
    const option = { returnOriginal: false }

    const updatedArticle = await ArticleModel.findOneAndUpdate(
      filter,
      update,
      option
    )

    return updatedArticle
  },

  delete: async ({ aritcleId }) => {
    await ArticleModel.deleteOne({ aritcleId })
  },
  // 좋아요 개수, 좋아요 누른 사용자 목록 업데이트
  updateLike: async ({ articleId, toUpdate }) => {
    const filter = { articleId } // 바꿀 게시물
    const update = toUpdate
    const option = { returnOriginal: false }

    const updateArticle = await ArticleModel.findOneAndUpdate(
      filter,
      update,
      option
    )

    return updateArticle
  },
}

export { Article }
