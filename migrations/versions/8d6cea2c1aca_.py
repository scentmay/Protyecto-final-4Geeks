"""empty message

Revision ID: 8d6cea2c1aca
Revises: b5f47f6e3f2f
Create Date: 2022-09-18 11:56:05.948406

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8d6cea2c1aca'
down_revision = 'b5f47f6e3f2f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cliente', 'peso',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=20),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cliente', 'peso',
               existing_type=sa.Float(precision=20),
               type_=sa.REAL(),
               existing_nullable=False)
    # ### end Alembic commands ###