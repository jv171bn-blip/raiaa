import React, { useState, useMemo, useEffect } from 'react';
import { Product } from '../../data/products';
import { getProductReviewsData, CustomerReview } from '../../data/productReviewsData';
import { useCart } from '../../context/CartContext';
import './ProductReviews.css';

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
  const { showToast } = useCart();
  const initialData = useMemo(() => getProductReviewsData(product), [product]);

  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(initialData.reviews);
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [selectedFilterStar, setSelectedFilterStar] = useState<number | null>(null);
  const [selectedSort, setSelectedSort] = useState<'recentes' | 'uteis' | 'maior' | 'menor'>('recentes');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    setReviewsList(initialData.reviews);
    setVisibleCount(5);
    setSelectedFilterStar(null);
  }, [product.id, initialData]);

  // "Quero avaliar" form state
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');

  // Comment reply state for individual review cards
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({});

  const handleToggleLike = (id: string) => {
    setLikedReviews(prev => {
      const isCurrentlyLiked = !!prev[id];
      const nextLiked = !isCurrentlyLiked;

      setReviewsList(current =>
        current.map(r =>
          r.id === id
            ? { ...r, helpfulCount: isCurrentlyLiked ? Math.max(0, r.helpfulCount - 1) : r.helpfulCount + 1 }
            : r
        )
      );

      if (nextLiked) {
        showToast('Obrigado pelo seu feedback!');
      }
      return { ...prev, [id]: nextLiked };
    });
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) {
      showToast('Por favor, escreva seu comentário sobre o produto.');
      return;
    }

    const authorName = newAuthor.trim() || 'Cliente Raia';
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(
      today.getMonth() + 1
    ).padStart(2, '0')}/${today.getFullYear()}`;

    const newRev: CustomerReview = {
      id: `user-rev-${Date.now()}`,
      author: authorName,
      rating: newRating,
      date: formattedDate,
      text: newComment.trim(),
      helpfulCount: 0,
    };

    setReviewsList([newRev, ...reviewsList]);
    setNewComment('');
    setNewAuthor('');
    setIsEvaluating(false);
    showToast('Sua avaliação foi enviada com sucesso!');
  };

  const handleAddReply = (reviewId: string) => {
    if (!replyText.trim()) return;
    setCommentsMap(prev => ({
      ...prev,
      [reviewId]: [...(prev[reviewId] || []), replyText.trim()],
    }));
    setReplyText('');
    setReplyingToId(null);
    showToast('Comentário publicado!');
  };

  // Filter & Sort
  const filteredAndSortedReviews = useMemo(() => {
    let list = [...reviewsList];

    if (selectedFilterStar !== null) {
      list = list.filter(r => r.rating === selectedFilterStar);
    }

    switch (selectedSort) {
      case 'uteis':
        list.sort((a, b) => b.helpfulCount - a.helpfulCount);
        break;
      case 'maior':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'menor':
        list.sort((a, b) => a.rating - b.rating);
        break;
      case 'recentes':
      default:
        // Already in recent order
        break;
    }

    return list;
  }, [reviewsList, selectedFilterStar, selectedSort]);

  const displayedReviews = filteredAndSortedReviews.slice(0, visibleCount);

  const tagsToShow = showAllTags ? initialData.highlightTags : initialData.highlightTags.slice(0, 2);

  return (
    <section className="pdp-reviews-section" id="avaliacoes">
      {/* 1. Header (Avaliações) */}
      <div className="pdp-rev__tabs-bar">
        <span className="pdp-rev__tab pdp-rev__tab--active">
          Avaliações
        </span>
      </div>

      <div className="pdp-rev__content">
          {/* 2. Rating Score & Recommendation Banner */}
          <div className="pdp-rev__score-row">
            <span className="pdp-rev__big-score">
              {initialData.rating.toFixed(1).replace('.', ',')}
            </span>
            <div className="pdp-rev__stars-group">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className="pdp-rev__star-icon"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#ffa100"
                  stroke="#ffa100"
                  strokeWidth="0.5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>

          <div className="pdp-rev__meta-lines">
            <p className="pdp-rev__based-on">
              Baseado em {initialData.reviewsCount} avaliações
            </p>
            <p className="pdp-rev__recommend-rate">
              {initialData.recommendedPercentage}% dos avaliadores recomendam o produto
            </p>
            <a
              href="#avaliacoes-lista"
              className="pdp-rev__see-all-scores"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('avaliacoes-lista');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ver todas as notas
            </a>
          </div>

          {/* 3. "Quero avaliar" Pill Button */}
          {!isEvaluating ? (
            <button
              type="button"
              className="pdp-rev__btn-outline pdp-rev__btn--want-eval"
              onClick={() => setIsEvaluating(true)}
            >
              Quero avaliar
            </button>
          ) : (
            <form onSubmit={handleAddReview} className="pdp-rev__eval-form">
              <h4 className="pdp-rev__eval-form-title">Avalie este produto</h4>
              <div className="pdp-rev__eval-stars-picker">
                <span className="pdp-rev__eval-label">Sua nota:</span>
                <div className="pdp-rev__stars-interactive">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      className="pdp-rev__star-picker-btn"
                      onClick={() => setNewRating(star)}
                      aria-label={`Nota ${star}`}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill={star <= newRating ? '#ffa100' : '#e5e7eb'}
                        stroke="#ffa100"
                        strokeWidth="0.5"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Seu nome (opcional)"
                value={newAuthor}
                onChange={e => setNewAuthor(e.target.value)}
                className="pdp-rev__eval-input"
              />

              <textarea
                placeholder="Conte o que achou do produto, fragrância, efeito, absorção..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                className="pdp-rev__eval-textarea"
                rows={3}
                required
              />

              <div className="pdp-rev__eval-buttons">
                <button
                  type="button"
                  className="pdp-rev__eval-cancel-btn"
                  onClick={() => setIsEvaluating(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="pdp-rev__eval-submit-btn">
                  Publicar avaliação
                </button>
              </div>
            </form>
          )}

          {/* 4. Resumo das opiniões (AI Summary) */}
          <div className="pdp-rev__ai-summary-box">
            <h3 className="pdp-rev__section-heading">Resumo das opiniões</h3>
            <p className="pdp-rev__ai-text">{initialData.aiSummary}</p>
            <div className="pdp-rev__ai-tag">
              {/* RD Abstract Cube Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b7280"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pdp-rev__ai-icon"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>Gerado por nossa IA a partir do texto das avaliações dos clientes</span>
            </div>
          </div>

          {/* 5. Avaliação por atributo */}
          <div className="pdp-rev__attributes-box">
            <h3 className="pdp-rev__section-heading">Avaliação por atributo</h3>
            <div className="pdp-rev__attr-subtitle">
              <span>Baseada em perguntas feitas aos clientes</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>

            <div className="pdp-rev__attributes-list">
              {initialData.attributes.map((attr, idx) => (
                <div key={idx} className="pdp-rev__attr-item">
                  <span className="pdp-rev__attr-name">{attr.name}</span>
                  <div className="pdp-rev__attr-bar">
                    {[1, 2, 3, 4].map(seg => (
                      <div
                        key={seg}
                        className={`pdp-rev__attr-segment ${
                          seg === attr.activeSegment ? 'pdp-rev__attr-segment--active' : ''
                        }`}
                      />
                    ))}
                  </div>
                  <div className="pdp-rev__attr-labels">
                    <span className="pdp-rev__attr-lbl-left">{attr.labels[0]}</span>
                    <span className="pdp-rev__attr-lbl-mid">{attr.labels[1]}</span>
                    <span className="pdp-rev__attr-lbl-right">{attr.labels[2]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Reviews List Header & Filters */}
          <div className="pdp-rev__list-header" id="avaliacoes-lista">
            <div className="pdp-rev__count-title">
              <strong>{initialData.reviewsCount}</strong> avaliaram este produto
            </div>

            {/* Filter & Sort Pill Dropdowns */}
            <div className="pdp-rev__filters-row">
              <div className="pdp-rev__dropdown-wrap">
                <button
                  type="button"
                  className={`pdp-rev__filter-btn ${selectedFilterStar !== null ? 'pdp-rev__filter-btn--active' : ''}`}
                  onClick={() => {
                    setIsFilterDropdownOpen(!isFilterDropdownOpen);
                    setIsSortDropdownOpen(false);
                  }}
                >
                  <span>
                    {selectedFilterStar ? `${selectedFilterStar} estrelas` : 'Filtrar por'}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isFilterDropdownOpen && (
                  <div className="pdp-rev__dropdown-menu">
                    <button
                      type="button"
                      className={`pdp-rev__dropdown-item ${selectedFilterStar === null ? 'pdp-rev__dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setSelectedFilterStar(null);
                        setIsFilterDropdownOpen(false);
                      }}
                    >
                      Todas as notas
                    </button>
                    {[5, 4, 3, 2, 1].map(star => (
                      <button
                        key={star}
                        type="button"
                        className={`pdp-rev__dropdown-item ${selectedFilterStar === star ? 'pdp-rev__dropdown-item--selected' : ''}`}
                        onClick={() => {
                          setSelectedFilterStar(star);
                          setIsFilterDropdownOpen(false);
                        }}
                      >
                        {star} {star === 1 ? 'estrela' : 'estrelas'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="pdp-rev__dropdown-wrap">
                <button
                  type="button"
                  className="pdp-rev__filter-btn"
                  onClick={() => {
                    setIsSortDropdownOpen(!isSortDropdownOpen);
                    setIsFilterDropdownOpen(false);
                  }}
                >
                  <span>
                    {selectedSort === 'recentes'
                      ? 'Ordenar por'
                      : selectedSort === 'uteis'
                      ? 'Mais úteis'
                      : selectedSort === 'maior'
                      ? 'Maior nota'
                      : 'Menor nota'}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isSortDropdownOpen && (
                  <div className="pdp-rev__dropdown-menu">
                    <button
                      type="button"
                      className={`pdp-rev__dropdown-item ${selectedSort === 'recentes' ? 'pdp-rev__dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setSelectedSort('recentes');
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      Mais recentes
                    </button>
                    <button
                      type="button"
                      className={`pdp-rev__dropdown-item ${selectedSort === 'uteis' ? 'pdp-rev__dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setSelectedSort('uteis');
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      Mais úteis
                    </button>
                    <button
                      type="button"
                      className={`pdp-rev__dropdown-item ${selectedSort === 'maior' ? 'pdp-rev__dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setSelectedSort('maior');
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      Maior nota
                    </button>
                    <button
                      type="button"
                      className={`pdp-rev__dropdown-item ${selectedSort === 'menor' ? 'pdp-rev__dropdown-item--selected' : ''}`}
                      onClick={() => {
                        setSelectedSort('menor');
                        setIsSortDropdownOpen(false);
                      }}
                    >
                      Menor nota
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Feature Tag Highlights with Green Dot */}
            <div className="pdp-rev__tags-list">
              {tagsToShow.map((tag, i) => (
                <div key={i} className="pdp-rev__tag-pill">
                  <span className="pdp-rev__green-dot">•</span>
                  <span>{tag}</span>
                </div>
              ))}
              {initialData.highlightTags.length > 2 && (
                <button
                  type="button"
                  className="pdp-rev__see-more-tags"
                  onClick={() => setShowAllTags(!showAllTags)}
                >
                  {showAllTags ? 'Ver menos' : 'Ver mais'}
                </button>
              )}
            </div>
          </div>

          {/* 7. Customer Review Cards (Realistic Comments!) */}
          <div className="pdp-rev__cards-container">
            {displayedReviews.length === 0 ? (
              <div className="pdp-rev__no-matching">
                <p>Nenhuma avaliação encontrada com os filtros selecionados.</p>
                <button
                  type="button"
                  className="pdp-rev__clear-filter-btn"
                  onClick={() => setSelectedFilterStar(null)}
                >
                  Limpar filtro
                </button>
              </div>
            ) : (
              displayedReviews.map(rev => {
                const isLiked = !!likedReviews[rev.id];
                const replies = commentsMap[rev.id] || [];

                return (
                  <article key={rev.id} className="pdp-rev-card">
                    {/* Author & Avatar */}
                    <div className="pdp-rev-card__author-row">
                      <div className="pdp-rev-card__avatar">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#666">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <span className="pdp-rev-card__author-name">{rev.author}</span>
                    </div>

                    {/* Stars & Date */}
                    <div className="pdp-rev-card__stars-row">
                      <div className="pdp-rev-card__stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < rev.rating ? '#ffa100' : '#e5e7eb'}
                            stroke="#ffa100"
                            strokeWidth="0.5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <span className="pdp-rev-card__date">{rev.date}</span>
                    </div>

                    {/* Comment Body */}
                    <p className="pdp-rev-card__text">{rev.text}</p>

                    {/* Action buttons (Like & Comment) */}
                    <div className="pdp-rev-card__actions">
                      <button
                        type="button"
                        className={`pdp-rev-card__action-btn ${isLiked ? 'pdp-rev-card__action-btn--liked' : ''}`}
                        onClick={() => handleToggleLike(rev.id)}
                        title="Avaliação útil"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={isLiked ? '#007189' : 'none'}
                          stroke={isLiked ? '#007189' : '#4b5563'}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                        </svg>
                        <span>{rev.helpfulCount}</span>
                      </button>

                      <button
                        type="button"
                        className="pdp-rev-card__action-btn"
                        onClick={() => {
                          setReplyingToId(replyingToId === rev.id ? null : rev.id);
                          setReplyText('');
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4b5563"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>Comentar</span>
                      </button>
                    </div>

                    {/* Reply Input Box */}
                    {replyingToId === rev.id && (
                      <div className="pdp-rev-card__reply-box">
                        <input
                          type="text"
                          placeholder="Adicione um comentário..."
                          value={replyText}
                          onChange={e => setReplyText(e.target.value)}
                          onKeyDown={e => {
                            if (e.key === 'Enter') handleAddReply(rev.id);
                          }}
                          className="pdp-rev-card__reply-input"
                          autoFocus
                        />
                        <button
                          type="button"
                          className="pdp-rev-card__reply-btn"
                          onClick={() => handleAddReply(rev.id)}
                        >
                          Enviar
                        </button>
                      </div>
                    )}

                    {/* Render existing replies if any */}
                    {replies.length > 0 && (
                      <div className="pdp-rev-card__replies-list">
                        {replies.map((reply, rIdx) => (
                          <div key={rIdx} className="pdp-rev-card__reply-bubble">
                            <span className="pdp-rev-card__reply-user">Você:</span>
                            <span className="pdp-rev-card__reply-text">{reply}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </div>

          {/* 8. "Veja mais comentários" Button */}
          {filteredAndSortedReviews.length > visibleCount && (
            <button
              type="button"
              className="pdp-rev__btn-outline pdp-rev__btn--see-more"
              onClick={() => setVisibleCount(prev => prev + 5)}
            >
              Veja mais comentários
            </button>
          )}
        </div>
    </section>
  );
};

export default ProductReviews;
